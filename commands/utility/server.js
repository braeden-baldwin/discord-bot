const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("Server")
    .setDescription("Gives a little information on the server"),

    async execute(interaction){
        interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
    }

}