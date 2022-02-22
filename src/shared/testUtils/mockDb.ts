import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const mockDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();

  return {
    connect: async () => {
      await mongoose.connect(mongoServer.getUri());
    },
    closeDatabase: async () => {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      mongoServer.stop();
    },
    clearDatabase: async () => {
      const collections = mongoose.connection.collections;

      for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
      }
    },
  };
};
