// Ponto de entrada das Rotas
const bodyParser = require('body-parser');
const pessoas = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const turmas = require('./turmasRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }))
    // Usando as rotas de pessoas
    app.use(pessoas);
    app.use(turmas);
    app.use(niveis);
}
