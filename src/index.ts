import express from 'express';
import cors from 'cors';
import { connectToMongoDB } from './utils/mongodb';
import config from './utils/config';
import middleware from './utils/middleware';

import imageRouter from './routes/images';

/* todo: add utility files (config, middleware, mongoose)
  - Install mongoose and prepare a database for the project
  - Add a get route for getting all image urls
  - Add a post route for uploading a new url to the database
  - Add a delete route for removing a url from the database
*/

const app = express();
const options: cors.CorsOptions = { origin: ['http://localhost:3000'] };
connectToMongoDB();

app.use(cors(options));
app.use(express.json());
// app.use(express.static('build'));

app.use('/', imageRouter);

app.use(middleware.unknownEndpoint);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});