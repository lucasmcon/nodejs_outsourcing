const Sequelize = require("sequelize");
const connection = new Sequelize("outsourcing" , "root", "Qwaszx123*",{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;