const { gql } = require('apollo-server');

exports.typeDefs = gql`
type Rating {
  rate: Float
  count: Int
}
type Product {
  id: Int!
  title: String!
  price:  Float!
  description: String!
  category: Category
  image:  String
  rating: Rating!
}
type Category{
  id: ID!
  name: String
  products: [Product!]
}
 type Query {
    hello: String
    products: [Product!]
    product(id: Int!): Product
    categories: [Category!]
    category(id: Int!): Category
    getByCategory(categoryId: Int!): [Product]
 }

 input ProductInput {
  title: String!, 
  price: Float!, 
  description: String!, 
  category: Int, 
  image: String! = "ANY IMAGE" 
 }

type Mutation{
  addCategory(name: String!): Category!
  createProduct(input: ProductInput!): Product!

}

`