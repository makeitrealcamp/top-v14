const mongoose = require('mongoose');

const createDbConnection = (dbURL) => {
  mongoose
    .connect(dbURL)
    .then(() => console.log('connected'))
    .catch((err) => console.log(err));
  mongoose.connection.on('error', () => console.log('Error on db connection'));
  mongoose.connection.once('connected', () => console.log('db connected'));
};

module.exports = createDbConnection;
