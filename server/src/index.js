const { ApolloServer, gql } = require('apollo-server');
const products = require('./products');

//Types String, Int, Float, Boolean ID, 

const typeDefs = gql`
type Rating {
  rate: Float
  count: Int
}

type Product {
  id: Int!
  title: String!
  price:  Float!
  description: String!
  category: String
  image:  String
  rating: Rating!
}

 type Query {
    hello: String
    products: [Product!]
    product(id: Int!): Product
 }
`

const resolvers = {
  Query: {
    hello: () => 'Hello Makers!',
    products: () => products,
    // product: (parent, args, context) => products.find(product => product.id === args.id)
    product: (_, { id }) => products.find(product => product.id === id)
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});