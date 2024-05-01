const mongoose = require('mongoose');


// model // 
const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'obligation nom pokemon'],
        unique: true
    },
    type: {
        type: String,
        required: [true, 'obligation du type']
    },

    createdAt: {
        type: Date,
        default: Date.now(),
        select: true,
    },
    base_experience: {
        type: Number,
        required: [true, 'obligation xp ']
    }

})

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;