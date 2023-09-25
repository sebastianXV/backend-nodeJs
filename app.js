const express = require('express');
const { mongoConn } = require('./databases/configuration');
const dotenv = require('dotenv').config();

mongoConn();

const app = express();

// Middlewares
app.use(express.json());

// Rutas
const test = require('./routes/test');
const generos = require('./routes/genero');
const directores = require('./routes/director');
const productoras = require('./routes/productora');
const media = require('./routes/media'); 

app.use('/api/v1/tests', test);
app.use('/api/v1/generos', generos);
app.use('/api/v1/directores', directores);
app.use('/api/v1/productoras', productoras);
app.use('/api/v1/media', media); 

module.exports = app;
