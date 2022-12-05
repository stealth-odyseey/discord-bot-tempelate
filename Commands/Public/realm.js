const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("realm")
    .setDescription("Sends realm code!"),
  /**
   *
   * @param { ChatInputCommandInteraction } awsdassdasd
   */
  execute(awsdassdasd, woof) {
    awsdassdasd.reply({
      content: "7x_LyvGrqf4",
    });
  },
};
