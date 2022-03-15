import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import logger from '../../shared/logger/appLogger';
import { createPreferenceService } from '../services/createPreferenceService';

export const checkoutController = async (
  req: Request<{}, {}, { items: any[] }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { items } = req.body;
  try {
    console.log(req.body);

    const urlRedirect = await createPreferenceService(items);
    res.status(201).json({ urlRedirect });
  } catch (error: any) {
    logger.error('error on create project controller', {
      instance: 'controller',
      service: 'createProjectController',
      trace: error.message,
    });
    next(new ApplicationError(403, error.message));
  }
};
