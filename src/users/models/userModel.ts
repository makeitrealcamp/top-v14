import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;


interface IUser extends Document {
  name: string,
  email: string,
  age: number,
  created_at: Date
}


const UserSchemma = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  created_at: {
    type: Date,
    default: Date.now()
  }
});


export const UserModel = mongoose.model<IUser>('User', UserSchemma);