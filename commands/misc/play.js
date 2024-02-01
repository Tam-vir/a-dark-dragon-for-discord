const Player = require('../../model/player');
module.exports = {
  name: 'play',
  description: 'Play treasure hunt!',
  callback: async (client, interaction) => {

    const query = {
      userId: interaction.user.id,
    };
    await interaction.reply("Geting Data...")
    const player = await Player.findOne(query);
    if (player){
      let world = player.world;
      let playerX = player.playerX;
      let playerY = player.playerY;
      let playerChunkX = player.playerChunkX;
      let playerChunkY = player.playerChunkY;
      let visibleMap = world[playerChunkX][playerChunkY];
      let mapArt = ``
      for(let i = 0; i < visibleMap.length; i++){
        for(let j = 0; j < visibleMap[i].length; j++){
          if(i === playerX && j === playerY){
            mapArt += `:grin:`
          }
          else{
            mapArt += `:green_square:`
          }
        }
        mapArt += `\n`
      }
      await interaction.editReply(mapArt);
      
    }
    else{
      await interaction.editReply("Please use the `/thstart` command to register as a hunter!");

    }

    }
};