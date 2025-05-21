const { SlashCommandBuilder } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../../sequelizeData");

module.exports={
    category:'osu',
    data:
    new SlashCommandBuilder()
    .setName("get_user")
    .setDescription("Returns information on the user"),
    async execute(interaction){
        const user = interaction.user.id;
        const userData = await users.findOne({where:{discordId:user}}); 
        if (userData){
            await interaction.reply(`Your osu ID is ${userData.get("osuId")}.`)
        }

        

    }
}