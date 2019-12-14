
const sequelize = require('sequelize');

const db = new sequelize.Sequelize('db_api','root','', {
    dialect : 'mysql',
    host: 'localhost'
});

module.exports = db;        