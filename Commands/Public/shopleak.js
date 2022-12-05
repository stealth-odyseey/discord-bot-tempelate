const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  const { execute } = require("../../Events/Client/ready");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("shopleak")
      .setDescription("Sends apex shop leaks."),
    /**
     *
     * @param { ChatInputCommandInteraction } awsdassdasd
     */
    execute(awsdassdasd, woof) {
      awsdassdasd.reply({
        content: "https://cdn.discordapp.com/attachments/1002565743000420362/1038234532467441714/IMG_1738.jpg",
      });
    },
  };