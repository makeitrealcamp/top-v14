import express, { Application, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from './shared/logger/morganLogger';

import userRoutes from './users/routes/userRoutes';
import tasksRoutes from './tasks/routes/taskRouter';
import projectsRoutes from './projects/routes/projectsRouter';
import authRoutes from './auth/router/authRouter';

dotenv.config();

const app: Application = express();

app.use(morgan);
app.use(express.json());

app.use(tasksRoutes);
app.use(projectsRoutes);
app.use(userRoutes);
app.use(authRoutes);

// app.set('port', process.env.PORT)

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // console.error(err.message)
  console.log(err.statusCode);

  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;
