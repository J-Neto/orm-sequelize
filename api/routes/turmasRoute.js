const { Router } = require('express');
const TurmaControlller = require('../controllers/TurmaControllers');

const router = Router();

router.get('/turmas', TurmaControlller.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaControlller.pegaUmaTurma);
router.post('/turmas', TurmaControlller.criaUmaTurma);
router.put('/turmas/:id', TurmaControlller.atualizaTurma);
router.delete('/turmas/:id', TurmaControlller.apagaTurma)

module.exports = router;