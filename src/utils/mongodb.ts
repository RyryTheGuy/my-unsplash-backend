import mongoose from 'mongoose';
import config from './config';

export const connectToMongoDB = () => {
  if (config.MONGODB_URI) {
    mongoose.connect(config.MONGODB_URI)
      .then(_ => console.log('Connected to MongoDB'))
      .catch(e => console.log('Unable to connect to MongoDB: ', e));
  } else {
    throw new Error('MongoDB URI is undefined');
  }
};