import { deleteUserService } from '../deleteUserService';
import * as factoryService from '../../../shared/factory';
jest.mock('../../../shared/factory', () => {
  return {
    deleteOneResourceById: jest
      .fn()
      .mockImplementation(() => Promise.resolve(true)),
  };
});

describe('delete user service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call', async () => {
    // jest.spyOn(factoryService, 'deleteOneResourceById');
    try {
      const result = await deleteUserService('123');
    } catch (error: any) {
      expect(error.message).toBe('Error deleting user with id 123');
      expect(factoryService.deleteOneResourceById).toHaveBeenCalledTimes(1);
    }
  });
  it('should call ok', async () => {
    // jest.spyOn(factoryService, 'deleteOneResourceById');
    // factoryService['deleteOneResourceById'] = jest.fn().mockImplementation;
    try {
      const result = await deleteUserService('123');
      expect(result).toBe(true);
    } catch (error: any) {
      expect(error.message).toBe('Error deleting user with id 123');
      expect(factoryService.deleteOneResourceById).toHaveBeenCalledTimes(1);
    }
  });
});
