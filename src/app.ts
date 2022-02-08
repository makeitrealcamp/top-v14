import express, { Application, NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import userRoutes from './users/routes/userRoutes';
import dotenv from 'dotenv';
import tasksRoutes from './tasks/routes/tasksRouter';
dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(userRoutes);
app.use(tasksRoutes);

// app.set('port', process.env.PORT)


app.use(function (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  // console.error(err.stack)
  res.status(500).send('Something broke!')
});

export default app;