const { SlashCommandBuilder, REST, Routes } = require("discord.js");
const {clientId, token} = require("../../config.json");

module.exports = {
    category:"dev",
    data: new SlashCommandBuilder()
    .setName("delete")
    .setDescription("Deletes a command from global")
    .addStringOption(option =>
        option.setName("command_id")
        .setDescription("The command ID to remove")
            .setRequired(true)
        )
    .addStringOption(option =>
        option.setName("guild_id")
        .setDescription("The ID of the server")
    ),
    async execute(interaction){
        const rest = new REST().setToken(token);

        const command = interaction.options.getString("command_id");
        const guild = interaction.options.getString("guild_id")

        if (guild){
            rest.delete(Routes.applicationGuildCommand(clientId, guild_id, command))
	            .then(() => interaction.reply('Successfully deleted guild command'))
	            .catch(console.error);

                
        }
        else{
            rest.delete(Routes.applicationCommand(clientId, command))
	            .then(() => interaction.reply('Successfully deleted application command'))
	            .catch(console.error);
        }

    }

}