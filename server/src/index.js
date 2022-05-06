const { ApolloServer, gql } = require('apollo-server');
const { products, categories } = require('./data');

const { typeDefs } = require('./schema/schema');
const Category = require('./resolvers/Category.resolver.js');
const Product = require('./resolvers/Product.resolver.js');
const { Query } = require('./resolvers/Query.resolver.js');
const Mutation = require('./resolvers/Mutations.js');

//Types String, Int, Float, Boolean ID, 
console.log(Category);


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Category,
    Product,
    Query,
    Mutation
  },
  context: {
    categories,
    products
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});