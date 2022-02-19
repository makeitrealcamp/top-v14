import { NextFunction, Request, Response } from 'express';

import { createUserService } from '../services/createUserService';
import { CreateUser } from '../entity/types/User';
import { getAllUsersService } from '../services/getAllUsersService';
import { getOneUserByIdService } from '../services/getOneUserByIdService';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { deleteUserService } from '../services/deleteUserService';
import { createAuthToken } from '../utils/tokenManager';
import logger from '../../shared/logger/appLogger';

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
    const user = await getOneUserByIdService(id);
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request<{}, {}, CreateUser>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createUserService(req.body);
    const token = createAuthToken({ id: newUser.id });
    res.status(200).json({ data: token });
  } catch (error) {
    next(error);
  }
};

export const editUser = (req: Request, res: Response) => {
  // nueva data
  const newUser: CreateUser = req.body;
  console.log(newUser);
  // id -> params
  const { id } = req.params;
  console.log(id);
  // database.push(user)

  res.status(200).json();
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    await deleteUserService(id);
    res.status(200).json({ data: [], message: 'user deleted succesfully' });
  } catch (error: any) {
    next(new ApplicationError(400, error.message));
  }
};
