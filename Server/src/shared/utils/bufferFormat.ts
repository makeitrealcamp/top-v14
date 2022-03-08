import { Multer } from 'multer';
import DatauriParser from 'datauri/parser';
import path from 'path';
const parser = new DatauriParser();

/**
 * @param file image file to be upload
 * @returns exact pat of the file
 */
export const bufferFormat = (file: Express.Multer.File) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);
