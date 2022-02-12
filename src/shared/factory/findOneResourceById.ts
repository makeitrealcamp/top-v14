import { Model as ModelType, ObjectId, Types } from 'mongoose';
import { UserIdType } from '../../users/entity/types/User';

export const findOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id: string | UserIdType): Promise<K[]> => {
    return await Model.find({ _id: id });
  };
