import { NextFunction, Request, Response } from 'express';
import logger from '../../shared/logger/appLogger';
import { deleteOneProjectService } from '../services';

export const getAllProjects = async (
  req: Request<{ projectId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { projectId } = req.params;
    // const userId = req.userId;
    // const tasks = await deleteOneProjectService({ projectId, userId });
    res.status(200).json({ data: 'projects' });
  } catch (error) {
    logger.error('Error getting projects');

    next(error);
  }
};
