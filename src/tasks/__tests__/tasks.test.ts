import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import app from '../../app';

describe('Tasks', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });
  describe('', () => {
    it('should return a 404', async () => {
      const { body, statusCode } = await supertest(app)
        .get(`/tasks`)
        .expect(200);
      console.log(body);
    });
  });
});
