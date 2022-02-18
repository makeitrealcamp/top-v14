import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { getAllProjectsService } from '../services/getAllprojectsService';

export const getAllProjects = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tasks = await getAllProjectsService();
    res.status(200).json({ data: tasks });
  } catch (error: any) {
    logger.error('Error on get all projects controller', {
      instance: 'controllers',
      fn: 'getAllProjects',
      trace: error.message,
    });

    next(
      new ApplicationError(400, `Error getting the projects ${error.message}`)
    );
  }
};
