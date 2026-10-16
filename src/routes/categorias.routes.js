import express from 'express';
import { listarCategorias } from '../controllers/categorias.controller.js';

const router = express.Router();

// GET /categorias
router.get('/', listarCategorias);

export default router;