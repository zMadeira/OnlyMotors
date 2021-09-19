const mongoose = require("mongoose");

//mongoDB connect

const dbConnection = 
mongoose.connect('mongodb://localhost:27017/onlyCar')
.then(() => {
    console.log('Banco conectado com sucesso');
})
.catch((err) => {
    console.log(err);
})

module.exports = dbConnection;