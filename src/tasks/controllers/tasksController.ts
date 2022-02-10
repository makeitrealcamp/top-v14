import { Request, Response } from 'express';
import { CreateTask } from 'tasks/types/TaskInterface';
import { Task } from '../models/tasksModel';

export const createTask = async (req: Request<{}, {}, CreateTask>, res: Response): Promise<void> => {

  const { title, description } = req.body;

  if (!title) {
    res.status(400).send({ error: 'title is required' });
  }

  try {
    const task = new Task({ title, description, created_by: '6201b0c2184e10f01f379733' });

    const newTask = await task.save();
    res.status(201).json({ data: newTask })
  } catch (error) {
    res.status(400).json({ error: ' error saving task' })
  }


}