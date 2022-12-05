const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Sends help server!"),
  /**
   *
   * @param { ChatInputCommandInteraction } awsdassdasd
   */
  execute(awsdassdasd, woof) {
    awsdassdasd.reply({
      content: "your discord server/website!",
    });
  },
};
