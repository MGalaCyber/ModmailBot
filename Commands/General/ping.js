//==============================================| IMPORT MODULES |==============================================\\
const { SlashCommandBuilder, Client, CommandInteraction } = require("discord.js");

//==============================================| CODE |==============================================\\

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Display application latency."),

    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */

    async execute(client, interaction) {
        return interaction.reply({ephemeral: true, content: "Pong!"});
    }
}