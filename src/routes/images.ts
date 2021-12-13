import express from 'express';
// import imageModel from '../models/images';

const router = express.Router();

router.get('/', (_, response) => {
  return response.send('hello');
});

export default router;