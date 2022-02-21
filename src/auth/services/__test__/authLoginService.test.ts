import { getOneUserByEmail } from '../../../users/services';
import { authLoginService } from '../authLoginService';

const userServices = { getOneUserByEmail };
// jest.mock('../../../users/services', () => {
//   return { getOneUserByEmail: jest.fn() };
// });
const mockUser = {
  _id: '620fe2fd41c2882838182940',
  email: 'ok66@tessat.com',
  password: '$2b$10$tAvTnRdxvS500fscaxjw/OP4pbpzHsDSYnx4Lg1luN8TEhu.w2/gW',
  createdAt: '2022-02-18T18:17:27.527Z',
  editedAt: '2022-02-18T18:17:27.527Z',
  __v: 0,
  id: '620fe2fd41c2882838182940',
};
describe.skip('auth', () => {
  // const mockGetOneUserByEmail = jest.fn() as jest.MockedFunction<
  //   typeof getOneUserByEmail
  // >;

  const mockGetOneUserByEmail = jest
    .spyOn(userServices, 'getOneUserByEmail')
    .mockImplementation((): Promise<any> => Promise.resolve(mockUser));

  // beforeAll(() => {});

  it('should resolve with true and valid userId for hardcoded token', async () => {
    try {
      const user = await authLoginService({ email: '', password: '' });
      expect(mockGetOneUserByEmail).toHaveBeenCalledTimes(1);
      expect(mockGetOneUserByEmail).toHaveBeenCalledWith('');
    } catch (error) {
      expect(error).toEqual('');
    }
  });

  // it('should resolve with false for invalid token', async () => {
  //   const response = await user.auth('invalidToken');
  //   expect(response).toEqual({
  //     error: { type: 'unauthorized', message: 'Authentication Failed' },
  //   });
  // });
});
/**
 * jest.mock('./SomeClass'); // this happens automatically with automocking
const SomeClass = require('./SomeClass');
const mMock = jest.fn();
SomeClass.mockImplementation(() => {
  return {
    m: mMock,
  };
});


const mockUploadError = jest.spyOn(uploadHelpers, 'validateUploadedFile')
  .mockImplementation(() => Promise.reject(new Error('some product/stores invalid')));
 
 import * as Foo from 'foo';

jest.mock('foo', () => ({
  __esModule: true,
    // @ts-ignore
    ...jest.requireActual('foo'),
}));

it('foo', () => {
 jest.spyOn(Foo, 'fooFunction')
})

import { createChannel, createClient } from "nice-grpc";
const foo = { createChannel, createClient };

jest.spyOn(foo, "createClient").mockReturnValue({});
jest.spyOn(foo, "createChannel").mockReturnValue({});
 
  */
