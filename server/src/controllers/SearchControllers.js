const Anuncio = require('../models/AnuncioSchema');


module.exports = {
  //Retorna todos os anuncios de UM USUARIO
  async anuncioByCod_user(request, response) {
    const { cod_user } = request.query;
    const anuncio = await Anuncio.find({
      cod_user: {
        $in: cod_user
      }
    }).then((anuncio) => {
      if (anuncio === []) {
        return response.json({ mesage: "Usuário não existe ou não tem anuncios criados" })
      }
      return response.json({ anuncio, "número de registros": anuncio.length });
    })
      .catch((err) => {
        return response.send(err)
      });
  },
  //Retorna anuncio pelo seu id
  async anuncioById(request, response) {
    const { id } = request.query;
    const anuncio = await Anuncio.find({
      _id: {
        $in: id
      }
    }).then((anuncio) => {
      if (anuncio === []) {
        return response.json({ message: "anúncio não existe ou não encontrado" })
      }
      return response.json(anuncio);
    })
      .catch((err) => {
        return response.send(err)
      });
  }
};