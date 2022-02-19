import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { CreateProject } from '../entity/types/Project';
import { createNewProjectService } from '../services/createNewProjectService';

export const createProjectController = async (
  req: Request<{}, {}, { title: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { title } = req.body;
  try {
    const newProject = await createNewProjectService({
      title,
      owner: req.userId,
    });
    res.status(201).json({ data: newProject });
  } catch (error: any) {
    logger.error('error on create project controller', {
      instance: 'controller',
      service: 'createProjectController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
