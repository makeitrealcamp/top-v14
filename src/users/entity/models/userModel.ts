import mongoose from 'mongoose';
import { UserSchemma } from '../schema/userSchema';
import { User } from '../types/User';

export const UserModel = mongoose.model<User>('User', UserSchemma);