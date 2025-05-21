const { SlashCommandBuilder } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../../sequelizeData")

module.exports = {
	category:'osu',
	data: new SlashCommandBuilder()
    .setName("set_osu_id")
    .setDescription("Update your osu ID")
    .addStringOption(option =>
        option.setName("osu_id")
        .setDescription("Your osu! user ID")
		.setRequired(true)
    ),
	async execute(interaction) {
		const osuUserId = interaction.options.getString('osu_id');

		try {
			const updatedUser = await users.update({ osuId: osuUserId }, { where: { discordId: interaction.user.id } });

			let updatedId = await users.findOne({where:{discordId: interaction.user.id}}); 
			updatedID = updatedId.get("osuId");

			await interaction.reply(`I updated your osu ID to ${osuUserId}`);
		}
		catch (error) {
			console.log(error)
			await interaction.reply("There was an error");
		}
	},
};