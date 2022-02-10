import mongoose, { Document, Types } from 'mongoose';

const Schema = mongoose.Schema;


export interface IUser {
  // _id: Types.ObjectId;
  name: string,
  email: string,
  age: number,
  created_at: Date;
}


const UserSchemma = new Schema<IUser>({
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
    default: new Date()
  }
});


export const UserModel = mongoose.model<IUser>('User', UserSchemma);