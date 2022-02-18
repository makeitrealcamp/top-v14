import { Model as ModelType, ObjectId } from 'mongoose';

export const deleteOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (id: string | ObjectId): Promise<any> => {
    return await Model.deleteOne({ _id: id });
  };
