const path = require('path');
const getAllFiles = require('../utils/getAllFiles');
module.exports = async (client) => {
  const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);

  for (const folder of eventFolders) {
    const eventFiles = getAllFiles(folder);
    eventFiles.sort((a,b)=>{ a > b})
    const eventName = folder.replace(/\\/g, '/').split('/').pop();
  client.on(eventName, async (args) => {
    for (const file of eventFiles) {
      const eventFunction = require(file);
      await eventFunction(client, args);
    }
  })
  }
}