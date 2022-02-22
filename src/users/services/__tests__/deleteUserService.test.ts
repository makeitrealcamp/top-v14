import { deleteOneResourceById } from '../../../shared/factory';
import { deleteUserService } from '../deleteUserService';

jest.mock('../../../shared/factory/deleteOneResourceById');

describe('delete user service', () => {
  const deleteOneResourceByIdMock =
    deleteOneResourceById as jest.MockedFunction<typeof deleteOneResourceById>;
  deleteOneResourceByIdMock.mockImplementation(() =>
    jest.fn().mockImplementation(() => Promise.resolve({ deletedCount: 1 }))
  );
  afterEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  it('should return an error it the user id is not provided', async () => {
    try {
      await deleteUserService('');
    } catch (error: any) {
      expect(error.message).toEqual('Error deleting user: no user id provided');
      expect(deleteOneResourceById).toHaveBeenCalledTimes(0);
    }
  });

  it('should return the deleted acount number', async () => {
    deleteOneResourceByIdMock.mockImplementation(() =>
      jest.fn().mockReturnValue({ deletedCount: 15 })
    );

    const result = await deleteUserService('3241');
    expect(deleteOneResourceById).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ deletedCount: 15 });
  });
  it('should return null', async () => {
    deleteOneResourceByIdMock.mockImplementation(() =>
      jest.fn().mockReturnValue(null)
    );

    const result = await deleteUserService('3241');
    expect(deleteOneResourceById).toHaveBeenCalledTimes(1);
    expect(result).toEqual(null);
  });
});
