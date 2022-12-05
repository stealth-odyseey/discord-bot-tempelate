const { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, ChannelType } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup')
        .setDescription('Setup the verification channel bot!')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addChannelOption((option) => 
            option.setName("channel")
            .setDescription("Channel to send the verification message to.")
            .addChannelTypes(ChannelType.GuildText)
            ),

        /**
         * 
         * @param {CommandInteraction} interaction 
         */
        async execute(interaction) {
            interaction.reply({
                content: 'Successfully setup the verification channel!'
            })

        }
}