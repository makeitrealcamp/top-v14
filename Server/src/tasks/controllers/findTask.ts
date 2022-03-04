import { NextFunction, Request, Response } from 'express';
import { getOneTaskByIdService } from '../services/getOneTaskByIdService';

export const findTask = async (
  req: Request<{ taskId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const task = await getOneTaskByIdService(req.params.taskId);
    res.status(200).json({ data: task });
  } catch (error) {
    next(error);
  }
};
