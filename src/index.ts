import express from 'express';
import cors from 'cors';
import { connectToMongoDB } from './utils/mongodb';
import config from './utils/config';
import middleware from './utils/middleware';
require('express-async-errors');

import imageRouter from './routes/images';

const app = express();
const options: cors.CorsOptions = { origin: ['http://localhost:3000'] };
connectToMongoDB();

app.use(cors(options));
app.use(express.json());
app.use(express.static('build'));

app.use('/images', imageRouter);

app.use(middleware.unknownEndpoint);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});