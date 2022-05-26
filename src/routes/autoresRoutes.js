/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import express from 'express';
import AutoresController from '../controller/autoresController.js';
import livros from '../models/Livro.js';

const router = express.Router();

router
  .get("/autores", AutoresController.listarAutores)
  .get("/autores/:id", AutoresController.listarAutoresPorId)
  .post("/autores", AutoresController.cadastrarAutores)
  .put("/autores/:id", AutoresController.atualizarAutores)
  .delete("/autores/:id", AutoresController.excluirAutores);

export default router;
