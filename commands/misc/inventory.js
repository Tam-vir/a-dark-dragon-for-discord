const Player = require('../../model/player');
module.exports = {
  name: 'inventory',
  description: 'Check your inventory',
  callback: async (client, interaction) => {
     const itr = await interaction;
    const query = {
      userId: interaction.user.id,
    };
    const player = await Player.findOne(query);
    if (player){
      await interaction.reply(`Loading...`);
      let inventory = player.inventory;
      let message = `Inventory of ${interaction.user.username}: \n${player.inventory.map(item => `${item.type}: ${item.amount}`).join('\n')}`
      await interaction.editReply(message);
      return;
    }
    else{
      
      await interaction.reply("Use the `/thstart` command to start as a hunter !");
       return;
    }
  },
};
