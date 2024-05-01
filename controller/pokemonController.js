
const Pokemon = require('../models/pokemonModel')


exports.getAllPokemon = async (req, res) => {
    try {

        const allPokemons = await Pokemon.find();
        console.log(allPokemons)

        res.status(200).json({
            status: 'success',
            message: "la liste des pokemon complete",
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
    try{

        
        const pokemon =  await Pokemon.findById(req.params.id)
        console.log(pokemon)
        res.status(200).json({
            message: "pokemon trouvé",
            data: {
                
                pokemon
            }
            
        })
    }catch(error){
        res.status(400).json({
            status :'fail',
            message:error
        })

    }
}

exports.createPokemon=  async (req, res) => {
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

exports.getFiltre = async (req, res) => {
    try {
        const typeRecherche = req.query.types; // Récupérer le type de Pokémon à partir des paramètres de requête
        if (!typeRecherche) {
            return res.status(400).json({ message: "Type de Pokémon manquant dans les paramètres de requête" });
        }

        const typePokemon = await Pokemon.find({ types: typeRecherche });
        console.log(typePokemon);

        if (typePokemon.length === 0) {
            return res.status(404).json({ message: "Aucun Pokémon de ce type trouvé" });
        }

        res.status(200).json({
            message: "Pokémon filtré",
            data: {
                typePokemon
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}


exports.uptdatePokemon = async(req,res) =>{
        try {
            const updt = await Pokemon.findByIdAndUpdate(req.params.id, req.body,{
                new :true,
                runValidators : true
              })

            res.status(200).json({
                status : 'success',
                message:'mise a jour ok',
                data :{
                    updt
                }
            })

        }catch(error){
            res.status(400).json({
                status:'fail',
                message : error

            })
        }
}

exports.deletePokemon = async(req,res)=>{
    try{

        const pokemonDelete =  await Pokemon.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
            message:'suppression ok',
            data:{
                pokemonDelete
            }
        })
    }catch(error){
        res.status(200).json({
            status : 'fail',
            message:'ok supprime'
        })
    }
}