import { NextFunction, Request, Response } from 'express';
import { getAllTasksService } from '../services/getAllTasksService';

export const getAllTasks = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json({ data: tasks });
  } catch (error) {
    next(error);
  }
};
