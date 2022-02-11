import mongoose, { Document, Types } from 'mongoose';
import { User } from '../types/User';

const Schema = mongoose.Schema;


const UserSchemma = new Schema<User>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  created_at: {
    type: Date,
    default: new Date()
  }
});


export const UserModel = mongoose.model<IUser>('User', UserSchemma);