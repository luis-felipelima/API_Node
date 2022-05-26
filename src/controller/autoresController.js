/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
/* eslint-disable array-callback-return */
/* eslint-disable import/extensions */
import autores from '../models/Autor.js';

class AutoresController {
  static listarAutores = (req, res) => {
    // eslint-disable-next-line no-shadow
    autores.find((err, autores) => {
      res.status(200).json(autores);
    });
  };

  static listarAutoresPorId = (req, res) => {
    const { id } = req.params;
    autores.findById(id, (err, autores) => {
      if (err) {
        res.status(400).send({ message: `${err.message} - Id do Autores não localizada` });
      } else {
        res.status(200).send(autores);
      }
    });
  };

  static cadastrarAutores = (req, res) => {
    let autor = new autores(req.body);
    autores.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err.message} - falha ao cadastrar Autores` });
      } else {
        res.status(201).send(autores.toJSON());
      }
    });
  };

  static atualizarAutores = (req, res) => {
    const { id } = req.params;
    autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Autor foi atualizado com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static excluirAutores = (req, res) => {
    const { id } = req.params;

    autores.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Autor removido com sucesso' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AutoresController;
