const express = require('express');
const createDbConnection = require('./database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
createDbConnection(`${process.env.MONGO_URI}`);

app.get('/', (req, res) => {

  res.send('Hello World from express!');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})