const express = require('express');
const router = express.Router();
const { check, validationResult  } = require('express-validator');

//se llaman a los controladores
const personaController = require('../controller/personeController');
const productoController = require('../controller/productoController');
const categoriaController = require('../controller/categoriaController');

//exporta la funcion donde contiene todas las rutas de la api
module.exports = function(){ 
    
    router.get('/inicio', personaController.mensaje);
    
    //RUTAS DE PERSONA

    //CRUD
    router.get('/persona', personaController.findAll);
    router.get('/persona/:id', personaController.find);
    router.post('/persona', personaController.create);
    router.post('/persona/update', personaController.update);

    //RUTAS DE PRODUCTO
    
    //CRUD
    router.get('/producto', productoController.findAll);
    router.get('/producto/:id', productoController.find);
    router.post('/producto',[
        //Validacion de datos
        check('nombre').not().isEmpty(),
        check('stock').not().isEmpty().isNumeric(),
        check('precio').not().isEmpty().isNumeric(),
        check('id_persona').not().isEmpty().isNumeric()
    ], productoController.create);
    router.post('/producto/update', [
        //Validacion de datos
        check('id').not().isEmpty(),
        check('nombre').not().isEmpty(),
        check('stock').not().isEmpty().isNumeric(),
        check('precio').not().isEmpty().isNumeric(),
        check('id_persona').not().isEmpty().isNumeric()
    ], productoController.update);

    //RUTAS DE CATEGORIA
    
    //CRUD

    router.get('/categoria', categoriaController.findAll);
    router.get('/categoria/:id', categoriaController.find);
    router.post('/categoria', categoriaController.create);

    return router;

};