const Persona = require('../models/persona');

exports.mensaje = (req, res) => {
    
    res.send('<h1>Hola a todos como estan</h1>');
    
};

exports.findAll = async (req, res) => {

    const persona = await Persona.findAll();
    res.json(persona);

};

exports.find = async (req, res) => {

    let { id } = req.params

    const persona = await Persona.findOne({
        where : {
            id
        }   
    });

    res.json(persona);

};

exports.create = async (req, res) => {

    let { nombre, apellido, edad } = req.body;

    let newProyecto = await Persona.create({nombre, apellido, edad});

    res.json({
        mensaje: 'persona_creada',
        proyecto: newProyecto
    });

};

exports.update = async (req, res) => {

    let { id, nombre, apellido, edad } = req.body;

    let persona = await Persona.update({ nombre, apellido, edad }, { where: { id } });

    if(persona) {

        persona = await Persona.findOne({ where : { id } });

    }

    res.json({
        mensaje: 'persona_actualizada',
        persona
    });

};