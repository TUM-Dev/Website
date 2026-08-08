const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Token used to query the GitHub GraphQL API. In CI this is the automatically
// provided secrets.GITHUB_TOKEN, locally you can use `gh auth token`.
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// The organisation whose public repositories we want to advertise
const ORG = 'TUM-Dev';

const API_ENDPOINT = 'https://api.github.com/graphql';

// Path to the generated github_repos.json file
const REPOS_FILE_PATH = path.join(__dirname, '..', 'github_repos.json');

// A single query gives us stars plus an exact split of open issues vs. open
// pull requests. The REST API only exposes open_issues_count, which lumps both
// together and would need one extra request per repository.
const QUERY = `
query ($org: String!, $cursor: String) {
  organization(login: $org) {
    repositories(first: 100, after: $cursor, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: DESC }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        name
        nameWithOwner
        description
        url
        isArchived
        isFork
        stargazerCount
        forkCount
        updatedAt
        primaryLanguage {
          name
        }
        issues(states: OPEN) {
          totalCount
        }
        pullRequests(states: OPEN) {
          totalCount
        }
      }
    }
  }
}`;

async function fetchPage(cursor) {
  const response = await axios.post(
    API_ENDPOINT,
    { query: QUERY, variables: { cursor, org: ORG } },
    {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );

  // GraphQL reports failures with HTTP 200 and an errors array, so the status
  // code alone is not enough to tell whether the query succeeded.
  if (response.data.errors) {
    throw new Error(
      `GitHub GraphQL API returned errors: ${JSON.stringify(response.data.errors)}`
    );
  }

  const organization = response.data.data && response.data.data.organization;
  if (!organization) {
    throw new Error(`Organization "${ORG}" not found in API response.`);
  }

  return organization.repositories;
}

async function getRepositories() {
  if (!GITHUB_TOKEN) {
    console.error('Error: GITHUB_TOKEN environment variable not set.');
    process.exit(1);
  }

  try {
    const nodes = [];
    let cursor = null;
    let hasNextPage = true;

    while (hasNextPage) {
      const page = await fetchPage(cursor);
      nodes.push(...page.nodes);
      hasNextPage = page.pageInfo.hasNextPage;
      cursor = page.pageInfo.endCursor;
    }

    // Archived and forked repositories are not places where we want to send
    // contributors, so they are dropped here rather than in the query.
    const repos = nodes
      .filter((repo) => !repo.isArchived && !repo.isFork)
      .map((repo) => ({
        description: repo.description,
        forks: repo.forkCount,
        language: repo.primaryLanguage ? repo.primaryLanguage.name : null,
        name: repo.name,
        nameWithOwner: repo.nameWithOwner,
        openIssues: repo.issues.totalCount,
        openPullRequests: repo.pullRequests.totalCount,
        stars: repo.stargazerCount,
        updatedAt: repo.updatedAt,
        url: repo.url,
      }));

    fs.writeFileSync(
      REPOS_FILE_PATH,
      JSON.stringify({ generatedAt: new Date().toISOString(), repos }, null, 2)
    );

    console.log(
      `Successfully fetched ${repos.length} active repositories of ${nodes.length} public ones.`
    );
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        `Error querying GitHub API: ${error.response.status} ${error.response.statusText}`
      );
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from GitHub API.');
    } else {
      console.error('Error during request:', error.message);
    }
    process.exit(1);
  }
}

// Run the function
getRepositories();
