/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose from 'mongoose';

export interface IPasswordModel {
  password: string;
}

const passwordSchema = new mongoose.Schema<IPasswordModel>({
  password: {
    type: String,
    required: true,
  }
});

passwordSchema.set('toJSON', {
  transform: (_, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default mongoose.model<IPasswordModel>('Password', passwordSchema);