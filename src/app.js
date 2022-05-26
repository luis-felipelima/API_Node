/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */

import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
  console.log('Conexão com o banco foi um sucesso');
});

const app = express();
app.use(express.json());
routes(app);

export default app;
