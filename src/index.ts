import { createDbConnection } from './config/databaseConfig';
import dotenv from 'dotenv';
import app from './app';
dotenv.config();

createDbConnection(`${process.env.MONGO_URI}`);

// app.listen(app.get('port'), () => console.log(`Server started on port ${app.get('port')}`))

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))