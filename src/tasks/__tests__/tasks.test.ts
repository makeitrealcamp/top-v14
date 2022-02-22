import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import app from '../../app';
import { createDbConnection } from '../../config/databaseConfig';
import { createAuthToken } from '../../auth/utils/tokenManager';

describe('Tasks', () => {
  const fakeTask = {
    __v: 0,
    _id: expect.any(String),
    createdAt: expect.any(String),
    project: '6210108d88ebda6534143fb0',
    status: false,
    title: 'fake title',
  };

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe('POST', () => {
    it('should return status 401 when no token is provided ', async () => {
      const { body } = await supertest(app)
        .post('/tasks')
        .set('Authorization', '')
        .expect(401);
      expect(body).toEqual({ message: 'No token provided' }); // jest
    });

    it('should return status 401 whit invalid token', async () => {
      const fakeToken = createAuthToken({});
      const { body } = await supertest(app)
        .post('/tasks')
        .set('Authorization', fakeToken)
        .expect(401);

      expect(body).toEqual({ message: 'Unvalid token' }); // jest
    });

    it('should return status 400 with invalid projectId', async () => {
      const fakeToken = createAuthToken({ id: '123' });
      const { body } = await supertest(app)
        .post('/tasks')
        .set('Authorization', fakeToken)
        .expect(400);

      expect(body).toEqual({ message: 'a project id is required' }); // jest
    });
    it('should return status 400 with invalid title', async () => {
      const fakeToken = createAuthToken({ id: '123' });
      const { body } = await supertest(app)
        .post('/tasks')
        .send({ projectId: '123' })
        .set('Authorization', fakeToken)
        .expect(400);

      expect(body).toEqual({ message: 'title is required' }); // jest
    });
    it('should return status 200 ', async () => {
      const fakeToken = createAuthToken({ id: '620fe2fd41c2882838182940' });
      const { body } = await supertest(app)
        .post('/tasks')
        .send({ projectId: '6210108d88ebda6534143fb0', title: 'fake title' })
        .set('Authorization', fakeToken)
        .expect(201);
      expect(body).toEqual({ data: fakeTask }); // jest
    });
  });
  describe('GET', () => {
    const fakeToken = createAuthToken({ id: '620fe2fd41c2882838182940' });
    it('should return a 200 ', async () => {
      const { body, statusCode } = await supertest(app)
        .get(`/tasks`)
        .set('Authorization', fakeToken)
        .expect(200); // supertest

      expect(body).toEqual({ data: [fakeTask] }); // jest
      expect(statusCode).toEqual(200); // jest
      console.log(body);
    });
  });
});
