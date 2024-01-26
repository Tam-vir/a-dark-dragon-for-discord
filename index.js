//modules
const express = require('express');
const {Client, GatewayIntentBits} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

//init
const app = express();
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});;
const TOKEN = process.env['TOKEN']

// server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(80, () => {
  console.log('Express server initialized');
});


//bot

eventHandler(client);
client.login(TOKEN);
