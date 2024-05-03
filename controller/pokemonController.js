
const Pokemon = require('../models/pokemonModel')
const pokemonService = require('../service/pokemonServiceFiltre')


exports.getAllPokemon = async (req, res) => {


    try { 

        const {query , message} = pokemonService.buildQuery(req.query)
        const allPokemons = await Pokemon.find(query).limit(4);
        console.log(allPokemons);
      

        res.status(200).json({
            status: 'success',
            message: message,
            data: {
                allPokemons
            }
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}


exports.getPokemon = async (req, res) => {
    try {


        const pokemon = await Pokemon.findById(req.params.id)
        console.log(pokemon)
        res.status(200).json({
            message: "pokemon trouvé",
            data: {

                pokemon
            }

        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })

    }
}

exports.createPokemon = async (req, res) => {
    try {

        const newPokemon = await Pokemon.create(req.body)

        res.status(200).json({
            status: 'success',
            message: "nouveau pokemon",
            data: {
                newPokemon
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })

    }
}


exports.uptdatePokemon = async (req, res) => {
    try {
        const updt = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            message: 'mise a jour ok',
            data: {
                updt
            }
        })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error

        })
    }
}

exports.deletePokemon = async (req, res) => {
    try {

        const pokemonDelete = await Pokemon.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            message: 'suppression ok',
            data: {
                pokemonDelete
            }
        })
    } catch (error) {
        res.status(200).json({
            status: 'fail',
            message: 'ok supprime'
        })
    }
}