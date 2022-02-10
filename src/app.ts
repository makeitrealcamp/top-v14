import express, { Application, NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import userRoutes from './users/routes/userRoutes';
import dotenv from 'dotenv';
import tasksRoutes from './tasks/routes/tasksRouter';
import morgan from 'morgan';
dotenv.config();

const app: Application = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(tasksRoutes);
app.use(userRoutes);

// app.set('port', process.env.PORT)

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // console.error(err.message)
  console.log(err.statusCode);

  res.status(err.statusCode ? err.statusCode : 500).send({ message: err.message, type: err.errorType })
});


export default app;