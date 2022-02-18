import { NextFunction, Request, Response } from 'express';
import Logger from '../../shared/logger/appLogger';
import { getAllProjectsService } from '../services/getAllprojectsService';

export const getAllProjects = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tasks = await getAllProjectsService();
    res.status(200).json({ data: tasks });
  } catch (error) {
    Logger.error('Error getting projects');

    next(error);
  }
};
