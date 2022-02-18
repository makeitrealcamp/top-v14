import { Schema } from 'mongoose';
import { ProjectModel } from '../../../projects/entity/models/projectModel';
import { User } from '../types/User';

export const UserSchemma = new Schema<User>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, ' email is required'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, ' password is required'],
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  editedAt: {
    type: Date,
  },
});

UserSchemma.virtual('projects', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'owner',
});

// agregattes

// middlewares
UserSchemma.pre('deleteOne', async function (next) {
  const user = this.getFilter();
  await ProjectModel.deleteMany({ owner: user.id });
  next();
});

UserSchemma.set('toJSON', { virtuals: true });
UserSchemma.set('toObject', { virtuals: true });
