import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  age: DataTypes.INTEGER,
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

export default User;
