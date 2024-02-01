const generateMap = require('../../utils/generateMap');

const Player = require('../../model/player');
module.exports = {
  name: 'thstart',
  description: 'Register as a hunter!',
  callback: async (client, interaction) => {
    
    const query = {
      userId: interaction.user.id,
    };
    await interaction.reply("One moment...")
    const player = await Player.findOne(query);
    if (player){
      await interaction.editReply(`You're already a hunter!`);
      return;
    }
    else{
      const map = generateMap();
      const newPlayer = new Player({
        userId: interaction.user.id,
        world: map,
        inventory: [{
          type: 'coins',
          amount:0
        }],
        xp: 0,
      });
      await interaction.editReply("registering...")
      await newPlayer.save().then(async () =>{
        await interaction.editReply("Welcome to the treasure hunt! Use the `/play` command to start playing!");
        return;
      }).catch(err =>{
        console.log('db error on saving player: ',err);
      });
      
    }
  },
};
