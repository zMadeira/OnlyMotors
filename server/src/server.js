const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/connection');
const routes = require('./routes');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json')

//Express usando JSON como comunicação 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Usando o arquivo de rotas
app.use(routes);
//conectar ao banco de Dados
dbConnection;
//Servidor ouvindo a porta 3333 ->  http://localhost:3333
app.listen(3333, () => console.log('Servidor rodando na porta 3333'));

//doc swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Retorna imagens armazenadas
app.use('/images', express.static('./src/assets/images'));

//Retornas download armazenados
app.use('/download', express.static('./src/assets/download'));

