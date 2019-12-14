//se importan los modelos
const Categoria = require('../models/categoria');

//Funciones CRUD
exports.findAll = async (req, res) => {
    
    let categorias = await Categoria.findAll();

    return res.json(categorias);

};

exports.find = async (req, res) => {

    let { id } = req.params;

    let categoria = await Categoria.findOne({ where: { id } });

    return res.json(categoria);

};

exports.create = async (req, res) => {

    let { valor } = req.body;

    let newCategoria = await Categoria.create({ valor });

    return res.json(newCategoria);

};

exports.update = async (req, res) => {

    let { id, valor } = req.body;

    let categoria = await Categoria.update({ valor }, { where: { id } });

    if(categoria){

        categoria = await Categoria.findOne({ where: id });

    }

    return res.json(categoria);

};