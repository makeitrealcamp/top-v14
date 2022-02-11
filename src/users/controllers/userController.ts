import { NextFunction, Request, Response } from 'express';
import { logger } from '../../shared/logger/appLogger';
import { createUserService } from '../services/createUserService';
import { CreateUser } from '../entity/types/User';
import { getAllUsersService } from '../services/getAllUsersService';
import { getOneUserByIdService } from '../services/getOneUserService';
import { ApplicationError } from '../../shared/customErrors/ApplicationError';

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const users = await UserModel.find({});
    const users = await getAllUsersService();

    // console.log(users[0]._id);
    res.status(200).json(users);

    // next(new Error(' Esto es un error desde get'))
  } catch (error: any) {
    logger.log('error', 'hello', { message: error.message });
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
    res.status(200).json({ data: newUser });
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

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json();
};
