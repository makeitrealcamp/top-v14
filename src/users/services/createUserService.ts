import { logger } from "../../logger/appLogger";

import { ApplicationError } from "../../customErrors/ApplicationError";


import { UserModel } from "../entity/models/userModel";
import { CreateUser, User } from "../entity/types/User";



export const createUserService = async (userRequest: CreateUser): Promise<User> => {
  try {
    const user = new UserModel(userRequest);
    return await user.save();
  } catch (error: any) {
    logger.log('error', 'CreateUserFN', { message: error.message, type: 'mongoose' });
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'db error' : '')
  }

}