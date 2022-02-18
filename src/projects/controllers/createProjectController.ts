import { Request, Response } from 'express';
import { CreateProject } from '../entity/types/Project';
import { createNewProjectService } from '../services/createNewProjectService';

export const createProject = async (
  req: Request<{}, {}, CreateProject>,
  res: Response
): Promise<void> => {
  const { title } = req.body;
  try {
    const newTask = await createNewProjectService({
      title,
      owner: '620fe2fd41c2882838182940',
    });

    res.status(201).json({ data: newTask });
  } catch (error) {
    res.status(400).json({ error: ' error saving task' });
  }
};
