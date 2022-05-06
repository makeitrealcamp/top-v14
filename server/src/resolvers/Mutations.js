const Mutation = {
  addCategory: (_, { name }, { categories }) => {
    const newCategory = {
      id: categories.length + 1,
      name
    };
    return newCategory;
  },

  createProduct: (_, { input }, { products }) => {
    const { title, price, description, category, image } = input;
    const newProduct = {
      id: products.length + 1,
      title,
      price,
      description,
      category,
      image
    };
    products.push(newProduct);
    return newProduct;
  }

}

module.exports = Mutation;