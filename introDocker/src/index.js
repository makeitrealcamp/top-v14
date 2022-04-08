const express = require('express');
const createDbConnection = require('./database');
const dotenv = require('dotenv');
const client = require('redis');
const axios = require('axios');

dotenv.config();
const app = express();

createDbConnection(`${process.env.MONGO_URI}`);

const redisCLient = client.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

(async () => {
  redisCLient.on('connect', () => { console.log('Redis client connected') });
  redisCLient.on('error', (err) => console.log('Redis Client Error', err));
  await redisCLient.connect();

  await redisCLient.set('name', 'pepe');
  const value = await redisCLient.get('name');
  console.log(value)
})();


//first approach
app.get('/posts', async (req, res) => {
  try {
    const response = await redisCLient.get('posts');
    console.log(response);
    if (response) {
      res.json(JSON.parse(response));
    }
    else {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      await redisCLient.set('posts', JSON.stringify(response.data));
      res.json(response.data);
    }
  } catch (error) {
    console.log(error);
  }
})

app.get('/photos', cache, async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
    await redisCLient.setEx(req.originalUrl, 100, JSON.stringify(data));
    res.json(data);
  } catch (error) {
    console.log(error);
  }
})
app.get('/photos/:id', cache, async (req, res) => {
  redisCLient.disconnect()
  res.send('photos')
});


async function cache(req, res, next) {
  try {
    const response = await redisCLient.get(req.originalUrl);
    if (response) {
      res.status(200).json(JSON.parse(response));
    } else {
      next();
    }
  } catch (error) {
    next(error)
  }
}



app.get('/', (req, res) => {
  res.send('Hello World from express!');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
})