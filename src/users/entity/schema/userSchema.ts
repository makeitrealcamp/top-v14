import { Schema } from 'mongoose';
import { User } from '../types/User';

export const UserSchemma = new Schema<User>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, ' email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, ' password is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  editedAt: {
    type: Date,
  },
});
