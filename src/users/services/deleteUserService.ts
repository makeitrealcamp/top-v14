import { UserModel } from '../entity/models/userModel';

export const deleteUserService = async (id: string): Promise<void> => {
  try {
    await UserModel.deleteOne({ id });
    console.log('delete user service ok');
  } catch (error: any) {
    throw new Error(`${error.message} Error deleting user`);
  }
};
