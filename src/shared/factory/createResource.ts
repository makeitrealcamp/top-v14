import { Model as ModelType } from 'mongoose';

export const createResource =
  (Model: ModelType<any>) =>
  async <T>(resource: T): Promise<T> => {
    const newResource = new Model(resource);
    return await newResource.save();
  };
