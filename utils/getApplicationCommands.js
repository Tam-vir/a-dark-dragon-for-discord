module.exports = async (client, gId) => {
  let applicationCommands;

  if(gId){
    const guild = await client.guilds.fetch(gId);
    applicationCommands = guild.commands
  }
  else{
    applicationCommands = await client.application.commands;
  }
  await applicationCommands.fetch();
  
  return applicationCommands;
}