import { Model as ModelType } from 'mongoose';

export const findAllResources = async <T>(Model: ModelType<T>): Promise<T[]> =>
  await Model.find({});
