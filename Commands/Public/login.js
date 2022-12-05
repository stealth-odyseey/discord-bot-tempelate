const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");
const { execute } = require("../../Events/Client/ready");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("login")
    .setDescription("Login into epic games!"),
  /**
   *
   * @param { ChatInputCommandInteraction } awsdassdasd
   */
  execute(awsdassdasd, woof) {
    awsdassdasd.reply({
      content:
        "https://www.epicgames.com/id/login?redirectUrl=https%3A%2F%2Fwww.epicgames.com%2Fid%2Fapi%2Fredirect%3FclientId%3D3446cd72694c4a4485d81b77adbb2141%26responseType%3Dcode",
    });
  },
};
