import express from 'express';
import { connectToMongoDB } from './utils/mongodb';
import config from './utils/config';
import middleware from './utils/middleware';
require('express-async-errors');

import imageRouter from './routes/images';

const app = express();
connectToMongoDB();

app.use(express.json());
app.use(express.static('build'));

app.use('/images', imageRouter);

app.use(middleware.unknownEndpoint);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});