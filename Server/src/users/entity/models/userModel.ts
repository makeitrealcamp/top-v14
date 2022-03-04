import { model } from 'mongoose';
import { UserSchemma } from '../schema/userSchema';
import { User } from '../types/User';

export const UserModel = model<User>('User', UserSchemma);
