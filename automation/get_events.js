const axios = require('axios');
const fs = require('fs');

// Get your Discord bot token from an environment variable
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

// Replace with the actual Guild ID you want to query
const GUILD_ID = '780140656597008387'; // e.g., '780140656597008387'

// The Discord API endpoint for scheduled events
const API_ENDPOINT = `https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events`;

// Function to fetch scheduled events
async function getScheduledEvents() {
  if (!DISCORD_BOT_TOKEN) {
    console.error('Error: DISCORD_BOT_TOKEN environment variable not set.');
    process.exit(1);
  }

  if (GUILD_ID === 'YOUR_GUILD_ID_HERE') {
    console.error("Error: Please replace 'YOUR_GUILD_ID_HERE' with your actual guild ID.");
    process.exit(1);
  }

  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    // Log the JSON data to standard output
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(
        `Error querying Discord API: ${error.response.status} ${error.response.statusText}`
      );
      console.error('Response data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from Discord API.');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error during request setup:', error.message);
    }
    process.exit(1);
  }
}

// Run the function
getScheduledEvents();

