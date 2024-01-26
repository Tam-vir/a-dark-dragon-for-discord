

module.exports =  (client, msg) => {
  if(msg.author.bot) return;
  console.log(msg.content, 'by', msg.author.tag, 'at', msg.channel.name, 'in', msg.guild.name);
}