import { ApolloServer, gql } from 'apollo-server';
import User from './users/models/user.model';
// The GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    age: Int
  }
  input UserInput {
    name: String
    email: String
    age: Int
  }

  type Query {
    "A simple type for getting started!"
    hello: String
    getAllUsers: [User]
  }
  type Mutation {
    createUser(input: UserInput): User
  }
`;
// typescript types

type UserInput = {
  input: {
    name: String;
    email: String;
    age: number;
  };
};

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    getAllUsers: async () => await User.findAll(),
  },

  Mutation: {
    createUser: async (_: any, { input }: UserInput): Promise<any> => {
      const { name, email, age } = input;
      console.log({ name, email, age });
      try {
        const user = await User.create({ name, email, age });
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
