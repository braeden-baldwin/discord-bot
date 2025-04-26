const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category:'utility',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Ponger!'),
	async execute(interaction) {
		await interaction.reply('Ponger!');
	},
};