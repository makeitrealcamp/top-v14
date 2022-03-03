import { UserModel } from '../entity/models/userModel';
import { findAllResources } from '../../shared/factory/findAllResources';
import { EditUser, User } from '../entity/types/User';
import logger from '../../shared/logger/appLogger';
import { upload } from '../../shared/services/uploadImageOnDiskService';
import { cloudinaryService } from '../../shared/services/uploadImageToCloudService';
import fs from 'fs';

export const editOneUserService = async (
  user: EditUser,
  image?: any
): Promise<any> => {
  try {
    // const users: User[] = await findAllResources(UserModel)();
    // return users;

    if (image) {
      const { public_id, format, url } = await cloudinaryService(image);
      console.log(url);
      // fs.unlinkSync(image);
    }
  } catch (error: any) {
    logger.error('error getting the users', {
      service: 'getAllUsersService',
      trace: error.message,
    });
    throw new Error('error getting the users');
  }
};
