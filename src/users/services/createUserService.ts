import { logger } from "../../logger/appLogger";
import { userRequest } from "../types/User";
import { ApplicationError } from "../../customErrors/ApplicationError";
import { IUser } from "../../users/models/userModel";
import { UserModel } from "../../users/models/userModel";

export const createUserService = async (userRequest: userRequest): Promise<IUser> => {

  try {
    const user = new UserModel(userRequest);
    return await user.save();
  } catch (error: any) {
    logger.log('error', 'CreateUserFN', { message: error.message, type: 'mongoose' });
    throw new ApplicationError(403, error.message, error.code === 11000 ? 'db error' : '')
  }

}