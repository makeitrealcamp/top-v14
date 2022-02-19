import { Schema } from 'mongoose';
import { Project } from 'projects/entity/types/Project';
import { TaskModel } from '../../../tasks/entity/models/taskModel';
import { UserIdType } from '../../../users/entity/types/User';

export interface Token {
  token: string;
  createdAt: Date;
  expireAt: Date;
  owner: UserIdType;
}

export const AuthTokenSchema = new Schema<Token>({
  token: {
    type: String,
    required: [true, 'a token is required'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  expireAt: {
    type: Date,
    default: new Date(),
    index: { expires: 60 },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'an user is required to create a project'],
  },
});

// ProjectSchema.virtual('tasks', {
//   ref: 'Tasks',
//   localField: '_id',
//   foreignField: 'project',
// });

// // agregattes

// // middlewares
// ProjectSchema.pre('deleteOne', async function (next) {
//   const user = this.getFilter();
//   console.log('🚀 ~ file: projectSchema.ts ~ line 35 ~ user', user);

//   await TaskModel.deleteMany({ project: user.id });
//   next();
// });

// ProjectSchema.set('toJSON', { virtuals: true });
// ProjectSchema.set('toObject', { virtuals: true });
