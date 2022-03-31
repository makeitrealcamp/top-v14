import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000', // <-- This is the URL of the React app client.
  },
});

io.on('connection', (socket) => {
  socket.on('createRoom', (room) => {
    console.log(room);
    // socket.join(room);
    socket.emit('setRoom', { message: `${room} was created`, status: true });
  });

  socket.on('sendMessage', (message) => {
    console.log(message);
    io.emit('message', message);
  });
});

// app.get('/', (req, res) => {
//   res.send('server is running');
// });

httpServer.listen(4000, () => {
  console.log('listening on 4000');
});
