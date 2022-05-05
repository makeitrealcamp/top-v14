// const { products } = require('../data');
const Category = {
  products: (parents, args, { products }) => products.filter(product => product.category === parents.id)
}
module.exports = Category;