const { SlashCommandBuilder } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../../sequelizeData");

module.exports={
    category:'osu',
    data:
    new SlashCommandBuilder()
    .setName("get_user")
    .setDescription("Returns information on the user")
    .addStringOption(option =>
        option.setName("user_id")
        .setDescription("The osu! user ID")
		.setRequired(true)
    ),
    async execute(interaction){
        const osuUserID = interaction.options.getString("user_id");
        const user = await users.findOne({ where: { osuId: osuUserID } });

        if (user){
            await interaction.reply(`That osuID is attached to ${user.get("discord")}`);
        }
        else{
            await interaction.reply("That osuID was not found in the database");
        }

    }
}