const Sequelize = require('sequelize');
const db = require('../config/db');

const Producto = require('../models/producto');

const Categoria = db.define('categoria', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true        
    },
    valor: Sequelize.STRING,
});

module.exports = Categoria;
