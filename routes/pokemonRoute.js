const express = require('express');

const pokemonController = require('../controller/pokemonController');

const router = express.Router();

router
    .route("/")
    .get(pokemonController.getAllPokemon)
    .post(pokemonController.createPokemon)


router
    .route("/:id")
    .get(pokemonController.getPokemon)
    .post(pokemonController.uptdatePokemon)
    .delete(pokemonController.deletePokemon)

router.route("/:types")
.get(pokemonController.getFiltre)

    module.exports = router ;