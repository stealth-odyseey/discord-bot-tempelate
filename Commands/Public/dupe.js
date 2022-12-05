const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");
const { execute } = require("../..//Events/client/ready");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dupe")
    .setDescription("Enables dupe!"),
  /**
   *
   * @param { ChatInputCommandInteraction } awsdassdasd
   */
  execute(awsdassdasd, woof) {
    awsdassdasd.reply({
      content: "Failed to acces profile!",
    });
  },
};