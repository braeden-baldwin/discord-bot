const { Events } = require("discord.js");
const Sequelize = require('sequelize');
const {users} = require("../sequelizeData")

module.exports={

    name:Events.ClientReady,
    once:true,
    execute(client){
        users.sync();
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },

};