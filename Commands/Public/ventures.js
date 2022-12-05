const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
  EmbedBuilder,
  Colors,
} = require("discord.js");
const { loadCommands } = require("../../Handlers/Commands");
const { loadEvents } = require("../../Handlers/Events");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ventures")
    .setDescription("Gives you end date and loadout videos for ventures!")
    .setDefaultMemberPermissions(PermissionFlagsBits.AddReactions)
    .addStringOption((options) =>
      options
        .setName("function")
        .setDescription("Choose what you want to see ")
        .setRequired(true)
        .addChoices(
          { name: "DaysLeft", value: "DaysLeft" },
          { name: "Venturesloadout", value: "Venturesloadout" }
        )
    ),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   * @param { Client } client
   */
  execute(interaction, client) {
    const choice = interaction.options.getString("function");

    switch (choice) {
      case "Daysleft":
        {
          for (const [key, value] of client.events)
            client.removeListener(`${key}`, value, true);
          loadEvents(client);
          interaction.reply({
            content: " ",
            embeds: [
              new EmbedBuilder()
                .setColor(Colors.Orange)
                .setDescription("29 days til ventures ends!"),
            ],
          });
        }
        break;

      case "Venturesloadout":
        {
          loadCommands(client);
          interaction.reply({
            content: " ",
            embeds: [
              new EmbedBuilder()
                .setColor(Colors.Orange)
                .setDescription(
                  "https://www.youtube.com/watch?v=IrlJ8y5vItA&t=0s"
                ),
            ],
          });
        }
        break;
    }
  },
};
