/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
import livros from '../models/Livro.js';

class LivroController {
  static listarLivros = (req, res) => {
    // eslint-disable-next-line no-shadow
    livros.find()
      .populate('autor')
      .exec((err, livros) => {
        res.status(200).json(livros);
      });
  };

  static listarLivroPorId = (req, res) => {
    const { id } = req.params;
    livros.findById(id)
      .populate('autor', 'nome')
      .exec((err, livros) => {
        if (err) {
          res.status(400).send({ message: `${err.message} - Id do livro não localizada` });
        } else {
          res.status(200).send(livros);
        }
      });
  };

  static cadastrarLivro = (req, res) => {
    let livro = new livros(req.body);
    livro.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar livro` });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };

  static atualizarLivro = (req, res) => {
    const { id } = req.params;
    livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Livro foi atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirLivro = (req, res) => {
    const { id } = req.params;

    livros.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Livro removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static listarLivroPorEditora = (req, res) => {
    const { editora } = req.query.editora;

    livros.find({ editora }, {}, (err, livros) => {
      res.status(200).send(livros);
    });
  };
}

export default LivroController;
