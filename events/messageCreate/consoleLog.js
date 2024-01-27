module.exports =  (client, msg) => {
  if(msg.author.bot) return;
  console.log('new message','at', msg.channel.name, 'in', msg.guild.name);
}