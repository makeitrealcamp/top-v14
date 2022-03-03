import { Response, Request, NextFunction } from 'express';
import { MulterError } from 'multer';
import { ApplicationError } from '../customErrors/ApplicationError';
import { uploadOnMemory } from '../services/uploadImageOnMemoryService';

const uploadImagesMiddlewareOnMemory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  uploadOnMemory(req, res, function (err) {
    if (err instanceof MulterError) {
      next(new ApplicationError(400, 'Not image file'));
    } else if (err) {
      next(new ApplicationError(400, err.message));
    }
    next();
  });
};

export default uploadImagesMiddlewareOnMemory;
