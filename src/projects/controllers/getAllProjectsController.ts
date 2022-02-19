import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { getUserById } from '../../users/controllers';
import { getOneUserByIdService } from '../../users/services/getOneUserByIdService';
import { getAllProjectsService } from '../services/getAllprojectsService';

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await getOneUserByIdService(req.userId);
    if (!user) throw new ApplicationError(401, `invalid user id`);
    const tasks = await getAllProjectsService({
      owner: user.id,
    });
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
