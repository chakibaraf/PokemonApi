const mongoose = require('mongoose');


// model // 
const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'obligation nom pokemon'],
        unique: true
    },
    types: {
        type:[String],
        required: [true, 'obligation du type']
    },
    picture:{
        type:String,
        required: [true, 'L\'URL de l\'image est obligatoire']
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