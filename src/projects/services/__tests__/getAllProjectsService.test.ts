import * as factoryService from '../../../shared/factory';
import * as MockProjectModel from '../../entity/models/projectModel';
import { Project } from '../../entity/types/Project';
import { getAllProjectsService } from '../getAllprojectsService';
// jest.mock('../../../shared/factory', () => {
//   return {
//     findAllResources: jest.fn().mockImplementation(() => Promise.resolve(true)),
//   };
// });

jest.mock('../../entity/models/projectModel', () => {
  const originalModule = jest.requireActual('../../entity/models/projectModel');
  return {
    ...originalModule,
    find: jest.fn().mockImplementation(() => Promise.resolve([] as Project[])),
  };
});

describe('delete user service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call', async () => {
    // jest.spyOn(MockProjectModel, 'ProjectModel');
    // .mockImplementation(() => Promise.resolve('ok'));
    try {
      const result = await getAllProjectsService(123);
      expect(result).toEqual({});
    } catch (error: any) {
      expect(error.message).toBe('Error deleting user with id 123');
      // expect(factoryService.deleteOneResourceById).toHaveBeenCalledTimes(1);
    }
  });
});
