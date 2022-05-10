import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { Optional } from 'sequelize/types';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface PersonCreationAttributes extends Optional<UserAttributes, 'id'> {}

// @Table
// class Users extends Model<UserAttributes, PersonCreationAttributes> {
//   @Column(DataType.INTEGER)
//   id: number;

//   @Column(DataType.TEXT)
//   name: string;
//   @Column(DataType.TEXT)
//   email: string;
//   @Column(DataType.INTEGER)
//   age: number;
// }
