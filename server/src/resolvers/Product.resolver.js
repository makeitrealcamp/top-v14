// const { categories, products } = require('../data');
const Product = {
  category: ({ category: id }, args, { categories }) => categories.find(category => category.id === id)
}

module.exports = Product;