/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://alura:alura@cluster0.gmc80.mongodb.net/alura-node');

const db = mongoose.connection;

export default db;
