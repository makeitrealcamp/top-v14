import { NextFunction, Request, Response } from 'express';
import { deleteOneTaskService } from '../services/deleteOneTaskService';
import { getOneTaskByIdService } from '../services/getOneTaskByIdService';

export const deleteTask = async (
  req: Request<{ taskId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const task = await deleteOneTaskService('');
    res.status(200).json({ data: task });
  } catch (error) {
    next(error);
  }
};
