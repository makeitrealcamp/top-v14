import { Request, Response } from 'express';
import { createNewTaskService } from '../services/createNewTaskService';

export const createTask = async (
  req: Request<
    { projectId: string },
    {},
    { title: string; description: string; projectId: string }
  >,
  res: Response
): Promise<void> => {
  const { title, description, projectId } = req.body;

  try {
    const newTask = await createNewTaskService({
      title,
      description,
      project: projectId,
    });

    res.status(201).json({ data: newTask });
  } catch (error) {
    res.status(400).json({ error: ' error saving task' });
  }
};
