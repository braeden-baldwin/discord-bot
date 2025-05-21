const { SlashCommandBuilder } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../../sequelizeData");
const { osuAPI } = require("../../osu.js");

module.exports={
    category:'osu',
    data:
    new SlashCommandBuilder()
    .setName("get_top_play")
    .setDescription("Returns information on the top play of the user"),
    async execute(interaction){
        const user = interaction.user.id;
        const userData = await users.findOne({where:{discordId:user}}); 
        const osuID = userData.get("osuId");

        let top_play = await osuAPI.getUserBestScores({
            u:osuID
        });

        let beatmap = top_play[0]["beatmap_id"];
        
        let top_map = await osuAPI.getBeatmaps({
            b:beatmap
        });

        await interaction.reply(`Your top play is worth ${top_play[0]["pp"]} on ${top_map[0]["title"]}`);
    }
}