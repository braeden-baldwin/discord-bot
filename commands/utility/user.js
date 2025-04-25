const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription("Gives a little information about the user"),

    async execute(interaction){
        await interaction.reply(`This command was ran by ${interaction.user.username} who joined the server on ${interaction.member.joinedAt}`);
    }
}