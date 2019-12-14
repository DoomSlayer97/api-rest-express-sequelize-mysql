//se importan tanto la configuracion como el sequelize para crear el modelo
const Sequelize = require('sequelize');
const db = require('../config/db');

//Se importan modelos que estan relacionados en la base de datos
const Persona = require('./persona');
const Categoria = require('./categoria');

//se define el modelo
const Producto = db.define('producto' ,{ 
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_persona: {
        type: Sequelize.INTEGER
    },
    id_categoria: {
        type: Sequelize.INTEGER
    },
    nombre: {
        type: Sequelize.STRING
    },
    stock: {
        type: Sequelize.INTEGER,
    },
    precio: {
        type: Sequelize.INTEGER,
    },
    
});

//Se le declara las relaciones al modelo

//PRODUCTO PERTENECE A MUCHAS PERSONAS
Producto.belongsTo(Persona, {
    foreignKey : 'id_persona'
});

//PRODUCTO PERTENECE A MUCHAS CATEGORIAS
Producto.belongsTo(Categoria, {
    foreignKey: 'id_categoria',
});

module.exports = Producto;