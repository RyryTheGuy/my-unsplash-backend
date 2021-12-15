import express, { Request } from 'express';
import imageModel from '../models/images';
import passwordModel from '../models/passwords';
import bcrypt from 'bcrypt';

const router = express.Router();

interface IPostRequest {
  title: string;
  url: string;
}

interface IDeleteRequest {
  password: string;
  id: string;
}

router.get('/', async (_request, response) => {
  // Sort images by newest
  const images = await imageModel.find({}).sort({ date: 'desc' });
  if (images.length === 0) throw new Error('Unable to get images from database');

  return response.status(200).json({ images });
});

router.post('/', async (request: Request<unknown, unknown, IPostRequest>, response) => {
  const body = request.body;
  const newImage = new imageModel({
    title: body.title,
    url: body.url, 
    date: new Date(),
  });
  const savedImage = await newImage.save();

  return response.status(200).json({ savedImage });
});

router.delete('/', async (request : Request<unknown, unknown, IDeleteRequest>, response) => {
  const body = request.body;
  const hashedPassword = await passwordModel.findOne({}); 

  if (hashedPassword) {
    const match = await bcrypt.compare(body.password, hashedPassword.password);
  
    if (match) {
      await imageModel.findByIdAndDelete(body.id);
      return response.status(200).json({ imageDeletedId: body.id });
    }
  
    return response.status(403).json({ error: 'Incorrect password'});
  } else {
    throw new Error ('No password to compare...');
  }
});

export default router;