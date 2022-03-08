import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from './shared/logger/morganLogger';

import swaggerUI from 'swagger-ui-express';

import { swaggerSpecs } from './config/swaggerConfig';

import userRoutes from './users/routes/userRoutes';
import tasksRoutes from './tasks/routes/taskRouter';
import projectsRoutes from './projects/routes/projectsRouter';
import authRoutes from './auth/router/authRouter';

dotenv.config();

const app: Application = express();

app.use(morgan);
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.use(tasksRoutes);
app.use(projectsRoutes);
app.use(userRoutes);
app.use(authRoutes);

// app.set('port', process.env.PORT)

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.message);
  console.log(err.statusCode);

  res
    .status(err.statusCode ? err.statusCode : 500)
    .send({ message: err.message, type: err.errorType });
});

export default app;
