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
    // const task = new TaskModel({
    //   title,
    //   description,
    //   created_by: '6201b0c2184e10f01f379733',
    // });

    const newTask = await createNewTaskService({
      title,
      description,
      owner: '6201b0c2184e10f01f379733',
    });

    res.status(201).json({ data: newTask });
  } catch (error) {
    res.status(400).json({ error: ' error saving task' });
  }
};
