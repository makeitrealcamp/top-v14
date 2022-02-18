import { ApplicationError } from '../../shared/customErrors/ApplicationError';
import { LoginUser } from '../entity/types/User';
import { validatePassword } from '../utils/passwordManager';
import { createToken } from '../utils/tokenManager';
import { getOneUserByEmail } from './getOneUserByEmail';

export const userLoginService = async (
  userRequest: LoginUser
): Promise<string> => {
  //TODO: refactor errors and add logger
  try {
    const user = await getOneUserByEmail(userRequest.email);
    if (user) {
      const auth = await validatePassword(userRequest.password, user.password);
      if (auth) {
        return createToken({ id: user.id });
      } else {
        throw new ApplicationError(401, 'user email or password is incorrect');
      }
    } else {
      throw new ApplicationError(401, "user email doesn't exists ");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
