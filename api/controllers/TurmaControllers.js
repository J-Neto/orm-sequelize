const { response } = require('express');
const database = require('../models');
const PessoaController = require('./PessoaController');

class TurmasControlller {
    // Lista as turmas
    static async pegaTodasAsTurmas(req, res) {
        try {
            const todasAsTurmas = await database.Turmas.findAll();
            return res.status(200).json(todasAsTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Lista uma turma selecionada
    static async pegaUmaTurma(req, res) {
        const { id } = req.params;
        try {
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaTurma);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Cria um registro de turma
    static async criaTurma(req, res) {
        const novaTurma = req.body;
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma);
            return res.status(200).json(novaTurmaCriada);
        } catch(error) {
            return res.status(500).json(error.message);
        }
    }

    // Atualiza um registro de turma
    static async atualizaTurma(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Turmas.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            });
            const turmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    // Deletar um registro de pessoa
    static async apagaTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;