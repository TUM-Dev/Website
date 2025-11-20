const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Get your Discord bot token from an environment variable
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

// Replace with the actual Guild ID you want to query
const GUILD_ID = '780140656597008387'; // e.g., '780140656597008387'

// The Discord API endpoint for scheduled events
const API_ENDPOINT = `https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events`;

// Path to the scheduled_events.json file
const EVENTS_FILE_PATH = path.join(__dirname, '..', 'scheduled_events.json');

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

    const newEvents = response.data;

    // Read existing events
    let existingEvents = [];
    if (fs.existsSync(EVENTS_FILE_PATH)) {
      const existingEventsData = fs.readFileSync(EVENTS_FILE_PATH, 'utf-8');
      existingEvents = JSON.parse(existingEventsData);
    }

    // Merge new events with existing events, avoiding duplicates
    const existingEventIds = new Set(existingEvents.map((e) => e.id));
    const mergedEvents = [...existingEvents];

    for (const newEvent of newEvents) {
      if (!existingEventIds.has(newEvent.id)) {
        mergedEvents.push(newEvent);
      }
    }

    // Write the merged events back to the file
    fs.writeFileSync(EVENTS_FILE_PATH, JSON.stringify(mergedEvents, null, 2));

    console.log(`Successfully fetched and merged ${newEvents.length} events.`);
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

