import { Model as ModelType, Types } from 'mongoose';

export const findOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id: string): Promise<K[]> => {
    return await Model.find({ _id: new Types.ObjectId(id) });
  };
