const Producto = require('../models/producto');
const Persona = require('../models/persona');
const Categoria = require('../models/categoria');

const { check, validationResult } = require('express-validator');

exports.findAll = async (req, res) => {

    const producto = await Producto.findAll({
        include: [ 
            { model: Persona },
            { model: Categoria },
        ]
    });

    return res.json(producto);

};

exports.find = async (req, res) => {

    let { id } = req.params;

    const producto = await Producto.findOne({
        where: {
            id
        },
        include: [ { model: Persona } ]
    });

    return res.json(producto);

};

exports.create = async (req, res) => {

    let { nombre, stock, precio, id_persona, id_categoria } = req.body;    

    let newProducto = await Producto.create({ nombre, stock, precio, id_persona, id_categoria });

    const errors = validationResult(req);

    if(!errors.isEmpty())
        return res.status(422).json({ errors: errors.array() });

    return res.json({
        mensaje: 'producto_creado',
        producto: newProducto
    });

};

exports.update = async (req, res) => {

    let { id, nombre, apellido, edad } = req.body;

    let producto = await Producto.update({ nombre, apellido, edad }, { where: { id } });

    if(producto) {

        producto = await Producto.findOne({ where: { id } });

    }

    return res.json({
        mensaje: 'producto_actualizado',
        producto
    });

};

exports.pruebas = async (req, res) => {

    

} 