import { Model as ModelType } from 'mongoose';

export const findAllResources = async <T>(
  Model: ModelType<any>
): Promise<T[]> => await Model.find({});
