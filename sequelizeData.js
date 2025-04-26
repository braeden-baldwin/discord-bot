Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const users = sequelize.define('users', {
	discordId: {
		type: Sequelize.STRING,
		unique: true,
	},
	discordUsername: Sequelize.STRING,
	osuId: Sequelize.STRING,
});

module.exports={
    users
}