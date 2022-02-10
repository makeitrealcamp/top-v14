import {
  NextFunction, Request, Response
} from "express";

import { ApplicationError } from "../../customErrors/ApplicationError";

export const userValidationMidleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.name) {
    next(new ApplicationError(400, 'name is required', 'validation'))
  }
  if (!req.body.email) {
    next(new ApplicationError(400, 'email is required', 'validation'))
  }
  // if (!req.body.email || !req.body.name) {
  //   next(new ApplicationError(400, 'bad data'))
  // }
  next()
}