const http = require('http');

const WebSocketServer = require('websocket').server;

const httpServer = http.createServer((req, res) => {

});


const wsServer = new WebSocketServer({
  httpServer: httpServer,
});

httpServer.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


wsServer.on('request', (request) => {

  const connection = request.accept(null, request.origin);
  connection.on('open', () => { console.log('Connection opened'); });


  connection.on('message', (message) => {
    if (message.type === 'utf8') {
      console.log(`Received Message: ${message.utf8Data}`);
      connection.sendUTF(`You said: ${message.utf8Data}`);
    }
  });

  connection.on('close', () => {
    console.log('Connection closed');
  });

  sendUpdateMessage();

  function sendUpdateMessage() {

    const randomNumber = Math.floor(Math.random() * 100);
    connection.send(`The random number is ${randomNumber}`);
    setTimeout(sendUpdateMessage, 5000);

  }
});

