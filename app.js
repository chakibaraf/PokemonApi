

const morgan = require('morgan')
const express = require('express');

const app = express();

 
app.use(morgan('dev'))



const pokemonRouter = require('./routes/pokemonRoute');

// nom de la base de donnée



// db connect



// middlewear 
app.use(express.json());
/*
app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'));

*/
//routes
app.use("/api/pokemons",pokemonRouter)


module.exports = app;