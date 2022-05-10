import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test', 'root', '123', {
  host: '0.0.0.0',
  dialect: 'mysql',
  port: 3306,
});

async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully. OK!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default dbConnection;
