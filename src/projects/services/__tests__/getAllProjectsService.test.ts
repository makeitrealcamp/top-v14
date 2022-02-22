import * as factoryService from '../../../shared/factory';
import { ProjectModel } from '../../entity/models/projectModel';
import { Project } from '../../entity/types/Project';
import { getAllProjectsService } from '../getAllprojectsService';
import { model } from 'mongoose';

jest.mock('mongoose');

jest.mock('../../../shared/factory', () => {
  return {
    findAllResources: jest.fn().mockImplementation(() => Promise.resolve(true)),
  };
});

// jest.mock('../../entity/models/projectModel');

// const ProjectModelMock = ProjectModel as Document as jest.MockedClass<typeof ProjectModel>;

// const mockAdd = jest.fn() as unknown as jest.MockedFunction<
//   typeof ProjectModel
// >;

describe('delete user service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should call', async () => {
    ProjectModel.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve(true));
    try {
      const result = await getAllProjectsService(123);
      expect(result).toEqual(true);
      expect(ProjectModel.find).toHaveBeenCalledTimes(1);
      expect(ProjectModel.find).toHaveBeenCalledWith({ id: 123 });
    } catch (error: any) {
      expect(error.message).toBe('Error deleting user with id 123');
    }
  });
});
