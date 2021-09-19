const mongoose = require('mongoose');

//Modelo Doc ANUNCIANTE
const AnuncioSchema = new mongoose.Schema({
    nome_fabricante:{
        type:String,
        required:true
    },
    veiculo_marca:{
        type:String,
        required:true
    },
    descricao_veiculo:{
        type:String,
        required:true
    },
    cod_user:{
        type:Number,
        required:true
    },
    ano_fabricacao:{
        type:Number,
        required:true
    },
    ano_modelo:{
        type:Number,
        required:true
    },
    cpf_user:{
        type:Number
    },
    cpnj_user:{
        type:Number
    },
    veiculo_valor:{
        type:String,
        required:true
    }
});
//Exportando Modulo
module.exports = mongoose.model('Anuncio', AnuncioSchema);