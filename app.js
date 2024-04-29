
const bodyparser = require('body-parser')
const morgan = require('morgan')
const express = require('express');
const PORT = 3000;
const app = express();

let pokemons = require('./models/pokemon')


// middlewear 
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {

    res.send("hello les amis")
})

app.get('/api/pokemon', (req, res) => {
    res.send("hello les pokemon")
})

app.get('/api/pokemon/:id', (req, res) => {
   // const id = req.params.id * 1
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(el => el.id === id);
    res.send(`voici mon pokemon n ${pokemon.name} `)
})

//server
app.listen(PORT, () => {
    console.log(`le server est allume sur le ${PORT}`)
})

console.log('hello #️⃣')