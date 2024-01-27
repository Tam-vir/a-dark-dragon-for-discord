//modules
const express = require('express');
const {Client, GatewayIntentBits} = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

//init
const app = express();
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});;
const TOKEN = process.env['TOKEN']
const mongoose = require('mongoose');
// server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(80, () => {
  console.log('Express server initialized');
});


(async () =>{
  try{
    await mongoose.connect(process.env['MONGODB_URI']);
    console.log('Connected to DB');
    eventHandler(client);
    client.login(TOKEN);
  } catch(err){
    console.log(err);
  }
})();

//bot

eventHandler(client);
client.login(TOKEN);

