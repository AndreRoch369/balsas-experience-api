import express from 'express';

import {
  listarAtracoes,
  buscarPorId,
  criar,
  atualizar,
  remover,
  avaliar
} from '../controllers/atracoes.controller.js';

const router = express.Router();

// GET /atracoes
router.get('/', listarAtracoes);

// GET /atracoes/:id
router.get('/:id', buscarPorId);

// POST /atracoes
router.post('/', criar);

// PUT /atracoes/:id
router.put('/:id', atualizar);

// DELETE /atracoes/:id
router.delete('/:id', remover);

// POST /atracoes/:id/avaliacoes
router.post('/:id/avaliacoes', avaliar);

export default router;