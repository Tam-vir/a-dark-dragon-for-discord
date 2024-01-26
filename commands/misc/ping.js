const {ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType} = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Pong!',
  callback: async (client, interaction) => {
    let text = 0;
    const addButton = new ButtonBuilder()
      .setCustomId('add')
      .setLabel('Add 1')
      .setStyle(ButtonStyle.Success);
    const subtractButton = new ButtonBuilder()
    .setCustomId('subtract')
    .setLabel('Subtract 1')
    .setStyle(ButtonStyle.Danger);
    const filter = (i) => i.user.id === interaction.user.id
    const row = new ActionRowBuilder().addComponents(addButton, subtractButton);
    const reply = await interaction.reply({
      content: String(text),
      components: [row],
    });
    const collector = reply.createMessageComponentCollector({
      componentType: ComponentType.Button,
      filter,
    });
    collector.on('collect', async (i) =>{
      if (i.customId === 'add') {
        text += 1;
        await i.update({
          content: String(text),
          components: [row],
        });
      }
      if (i.customId === 'subtract') {
        text -= 1;
        await i.update({
          content: String(text),
          components: [row],
        });
      }
    });
  },
};