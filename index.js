//se importa el module de express
const express = require('express');
//se le declara a una constante
const app = express();
//se importa el modulo de rutas que creamosd
const router = require('./routes');
//se importan la configuracion del ORM SEQUELIZE
const db = require('./config/db');
//se importa el modulo para obtener datos en las peticiones de tipo json
const bodyParser = require('body-parser');

//se prueba el orm con la base de datos
db.sync()
    .then( () => console.log('Conectado a la base de datos') )
    .catch( (err) => console.log(err) )

//se importan los modelos para migren automaticamente a la base de datos
require('./models/persona');
require('./models/producto');
require('./models/categoria');

//se le declara el uso de body parser a nuestro servicio de exprress
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//se le declaran las rutas importadas
app.use('/', router());

//se levanta el servidor en el puerto indicado
app.listen(3000);