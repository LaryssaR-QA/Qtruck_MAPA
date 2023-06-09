import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import mongoose from 'mongoose'

import routes from './routes';
import errorHandler from './errors/handler';

const mongoURI = 'mongodb+srv://qa:cademy@cluster0.eqzgc2b.mongodb.net/QtruckDB?retryWrites=true&w=majority'  //conexão com banco de dados

mongoose.connect(mongoURI)

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

const port = 3333

app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})
