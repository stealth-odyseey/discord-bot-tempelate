module.exports = {
  id: "meme-next",
  /**
   *
   * @param {import("discord.js").ButtonInteraction} interaction
   * @param {import("../../bot")} client
   */
  async execute(interaction, client) {
    let meme = await utils.getMeme();
    await interaction.update({ embeds: [meme] });
  },
};
