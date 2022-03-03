import { Response, Request, NextFunction } from 'express';
import { MulterError } from 'multer';
import { ApplicationError } from '../customErrors/ApplicationError';
import { upload } from '../services/uploadImageOnDiskService';

const uploadImagesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  upload(req, res, function (err) {
    if (err instanceof MulterError) {
      next(new ApplicationError(400, 'Not image file'));
    } else if (err) {
      next(new ApplicationError(400, err.message));
    }
    next();
  });
};

export default uploadImagesMiddleware;
