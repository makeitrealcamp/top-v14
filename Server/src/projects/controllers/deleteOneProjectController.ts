import { NextFunction, Request, Response } from 'express';
import logger from '../../shared/logger/appLogger';
import { deleteOneProjectService } from '../services';

export const deleteOneProject = async (
  req: Request<{ projectId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { projectId } = req.params;
    const userId = req.userId;
    const result = await deleteOneProjectService(projectId, userId);

    res.status(200).json({ succes: result });
  } catch (error) {
    logger.error('Error getting projects');

    next(error);
  }
};
