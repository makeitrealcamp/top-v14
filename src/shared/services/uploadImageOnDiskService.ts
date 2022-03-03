import multer, { FileFilterCallback, MulterError } from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    req.userId = '123';
    const ext = file.mimetype.split('/')[1];
    cb(null, `${req.userId}-${Date.now()}.${ext}`);
  },
});

const fileFilter = (
  _req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(null, false);
    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'));
    // cb(new Error('Is not an image'));
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
}).single('image');
