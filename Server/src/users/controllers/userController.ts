import { NextFunction, Request, Response } from 'express';

import { CreateUser, EditUser } from '../entity/types/User';
import { getAllUsersService } from '../services/getAllUsersService';
import { getOneUserByIdService } from '../services/getOneUserByIdService';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { deleteUserService } from '../services/deleteUserService';

import logger from '../../shared/logger/appLogger';
import { getUserWithProjectsAndTasksService } from '../services/getUserWithProjectsAndTasksService';
import { editOneUserService } from '../services/editOneUserService';
import { bufferFormat } from '../../shared/utils/bufferFormat';

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    logger.error('error', 'hello', { message: error.message });
    next(new ApplicationError(400, 'error getting the users'));
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const all = await getUserWithProjectsAndTasksService(id);

    const user = await getOneUserByIdService(id);
    res.status(200).json({ data: all });
  } catch (error) {
    next(error);
  }
};

export const editUser = async (req: Request, res: Response) => {
  // nueva data
  const newUser: EditUser = req.body;
  console.log('THIS IS File');
  console.log(req.file);
  // id -> params
  const { id } = req.params;
  console.log(id);

  newUser.id = id;
  // sendEmail();
  // console.log(bufferFormat(req.file!));
  //
  await editOneUserService(newUser, req.file);

  // database.push(user)

  res.status(200).json({});
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await deleteUserService(id);
    res.status(200).json({ data: [], message: 'user deleted successfully' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
