import { Model as ModelType, ObjectId } from 'mongoose';

export const deleteOneResourceById =
  <K>(Model: ModelType<K>) =>
  async (query: any): Promise<{ deletedCount: number } | null> => {
    try {
      return await Model.deleteOne(query);
    } catch (error: any) {
      throw new Error(error);
    }
  };
