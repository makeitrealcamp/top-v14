import express, { Application, NextFunction, Request, Response, ErrorRequestHandler } from 'express';

import userRoutes from './routes/userRoutes';

const app: Application = express();


// const add = (a: number, b: number): number => a + b

app.use(express.json());



app.use(userRoutes);

// app.get('/users', (req: Request, res: Response) => {

//   res.status(201).json({ result: ['1'] });

// });
// app.post('/users', (req: Request, res: Response) => {

//   res.status(201).json({ result: ['1'] });

// });

// app.post('/users/:id', (req: Request, res: Response) => {
//   console.log(req.body);
//   console.log(req.params);
//   console.log(req.query);
//   res.status(200).send()
// })


app.use(function (err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction) {
  // console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => console.log('Server started'))