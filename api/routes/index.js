// Ponto de entrada das Rotas
const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');

module.exports = app => {
    app.use(bodyParser.json());
    
    // Usando as rotas de pessoas
    app.use(pessoas);
}
