const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  const { execute } = require("../../Events/Client/ready");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("walrus")
      .setDescription("walrus!"),
    /**
     *
     * @param { ChatInputCommandInteraction } awsdassdasd
     */
    execute(awsdassdasd, woof) {
      awsdassdasd.reply({
        content: "urlocalcooker",
      });
    },
  };