import server from './app';

import dbConnection from './db/config';

dbConnection()
  .then(() => console.log('db connected'))
  .catch(() => {});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
