// pokemonService.js

// Fonction pour créer un objet de requête en fonction des paramètres de requête
const buildQuery = (queryParams) => {
    let query = {};
   

    if (queryParams.types) {
        query.types = queryParams.types;
        message = `la liste des pokemon de type ${queryParams.types}`;
    }

    if (queryParams.name) {
        query.name = queryParams.name;
        message = `la liste des pokemon avec le nom ${queryParams.name}`;
    }

    if (queryParams.base_experience) {
        const baseExperience = parseInt(queryParams.base_experience);
        if (!isNaN(baseExperience)){
            query.base_experience = baseExperience;
            message = `la liste des pokemon avec une expérience de base de ${queryParams.base_experience}`;
        }else {
            return res.status(400).json({status:'fail', message:'la valeur doit etre un nombre entier'})
        }
    
    }   


    return { query, message };
};

module.exports = {
    buildQuery
};
