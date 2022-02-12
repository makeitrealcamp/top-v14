import { Schema } from 'mongoose';
import { TaskModel } from '../../../tasks/entity/models/taskModel';
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

UserSchemma.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
});

// agregattes

// middlewares
UserSchemma.pre('deleteOne', async function (next) {
  const user = this.getFilter();
  await TaskModel.deleteMany({ owner: user.id });
  next();
});

UserSchemma.set('toJSON', { virtuals: true });
UserSchemma.set('toObject', { virtuals: true });
