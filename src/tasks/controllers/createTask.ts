import { Request, Response } from 'express';
import { createNewTaskService } from '../services/createNewTaskService';

export const createTask = async (
  req: Request<
    { projectId: string },
    {},
    { title: string; description: string }
  >,
  res: Response
): Promise<void> => {
  const { title, description } = req.body;
  const { projectId } = req.params;
  try {
    const newTask = await createNewTaskService({
      title,
      description,
      owner: '62070a3a3de76e739ae5445f',
    });

    res.status(201).json({ data: newTask });
  } catch (error) {
    res.status(400).json({ error: ' error saving task' });
  }
};
