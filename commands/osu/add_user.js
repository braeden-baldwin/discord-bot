const { SlashCommandBuilder } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../../sequelizeData")

module.exports = {
	category:'osu',
	data: new SlashCommandBuilder()
    .setName("add_user")
    .setDescription("Add your osu ID to the database!")
    .addStringOption(option =>
        option.setName("user_id")
        .setDescription("Your osu! user ID")
		.setRequired(true)
    ),
	async execute(interaction) {
		const osuUserId = interaction.options.getString('user_id');

		try {
			const user = await users.create({
				osuId: osuUserId,
				discordId: interaction.user.id,
				discordUsername: interaction.user.username,
			});

			await interaction.reply(`I added ${osuId} as your osuId`);
		}
		catch (error) {
			if (error.name === 'SequelizeUniqueConstraintError') {
				await interaction.reply('That user already exists, use a set command instead.');
			}

			await interaction.reply('Something went wrong with adding a user.');
		}
	},
};