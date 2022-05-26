/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
import express from 'express';
import LivroController from '../controller/livrosController.js';
import livros from '../models/Livro.js';

const router = express.Router();

router
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .get("/livros/:id", LivroController.listarLivroPorId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro);

export default router;
