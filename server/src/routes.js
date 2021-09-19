const {Router} = require('express');
const multer = require('multer');

const AnuncioController = require('./controllers/AnuncioController');
const SearchControllers = require('./controllers/SearchControllers');

const routes = Router();
const multerConfig = multer();

// Metodo GET - RETORNA TODOS OS ANUNCIOS
routes.get('/anuncios', AnuncioController.index); 
// Metodo GET - RETORNA ANUNCIO DE UM UNICO USER
routes.get('/anuncioByCod_user', SearchControllers.anuncioByCod_user);
// Metodo GET - RETORNA ANUNCIO PELO SEU ID
routes.get('/anuncioById', SearchControllers.anuncioById);
//metodo POST - CRIAR ANUNCIO 
routes.post('/add_anuncio', multerConfig.single('file'), AnuncioController.store);

module.exports = routes;