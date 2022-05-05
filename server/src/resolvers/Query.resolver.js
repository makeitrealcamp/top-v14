// const { categories, products } = require('../data');

exports.Query = {
  hello: () => 'Hello Makers!',
  products: (_, args, context) => context.products,
  // product: (parent, args, context) => products.find(product => product.id === args.id)
  product: (_, { id }, context) => context.products.find(product => product.id === id),
  categories: (_, args, context) => context.categories,
  category: (parents, args, context) => context.categories.find(category => category.id === args.id),
  getByCategory: (_, { categoryId }, context) => context.products.filter(product => product.category === categoryId)
}
