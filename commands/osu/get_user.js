const { SlashCommandBuilder } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../../sequelizeData");
const { osuAPI } = require("../../osu.js")

module.exports={
    category:'osu',
    data:
    new SlashCommandBuilder()
    .setName("get_user")
    .setDescription("Returns information on the user"),
    async execute(interaction){
        const user = interaction.user.id;
        const userData = await users.findOne({where:{discordId:user}}); 

        let osuId = userData.get("osuId")
        if (userData){
            let osuData = await osuAPI.getUser({
                u:osuId
            });

            let username = osuData["username"]
            await interaction.reply(`Your osu username is ${username}.`)
        }
        else{
            await interaction.reply("Your ID does not exist, use add_user.")
        }
    }
}