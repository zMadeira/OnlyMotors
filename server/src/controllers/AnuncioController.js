const Anuncio = require('../models/AnuncioSchema');
const {Readable} = require('stream');
const readline = require('readline');

module.exports = {
    //função para retonar todos os anuncios
    async index(request, response){
        const anuncio = await Anuncio.find();
        return response.json({anuncio, "número de registros":anuncio.length});
    },
    //função para ler o arquivo csv e salvar no Banco
    async store(request, response){
        const {file} = request;
        const {buffer} = file;

        const readbleFile = new Readable();
        readbleFile.push(buffer);
        readbleFile.push(null);

        const anuncioLine = readline.createInterface({
            input : readbleFile
        });

        const anuncioArray = [];

        for await( let line of anuncioLine){
            const anuncioLineSplit = line.split(';');
            anuncioArray.push({
                nome_fabricante: anuncioLineSplit[0],
                veiculo_marca: anuncioLineSplit[1],
                descricao_veiculo: anuncioLineSplit[2],
                cod_user: Number(anuncioLineSplit[3]),
                ano_fabricacao: Number(anuncioLineSplit[4]),
                ano_modelo: Number(anuncioLineSplit[5]),
                cpf_user: Number(anuncioLineSplit[6]),
                cnpj_user: Number(anuncioLineSplit[7]),
                veiculo_valor: anuncioLineSplit[8],
            });
        };
    
        for await ( let {
            nome_fabricante,
            veiculo_marca,
            descricao_veiculo,
            cod_user,
            ano_fabricacao,
            ano_modelo,
            cpf_user,
            cnpj_user,
            veiculo_valor
        } of anuncioArray){
            await Anuncio.create({
                nome_fabricante, 
                veiculo_marca, 
                descricao_veiculo,
                cod_user,
                ano_fabricacao,
                ano_modelo,
                cpf_user,
                cnpj_user,
                veiculo_valor
            });
        };
    
        return response.json({message : "Adicionados com sucesso"})
       
    }
}