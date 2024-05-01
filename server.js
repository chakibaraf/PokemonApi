
const mongoose = require('mongoose')
const app = require('./app');


const DB_URI = "mongodb://127.0.0.1/pokemon"


//Mongodb connect 

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(err => console.error('Erreur de connexion à MongoDB :', err));




//SERVER //
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`app est demarre sur le  ${PORT}`)
})