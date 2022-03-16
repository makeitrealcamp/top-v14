import faker from 'faker';
import { totalPrice } from '../services/totalPrice';
import { totalProducts } from '../services/totalProducts';
import { initialState } from '../types/initialState';
import { cartReducer } from './cartReducer';

const generateProducts = (total: number, qty?: number) => {
  const products = [];
  for (let index = 0; index < total; index++) {
    products.push({
      id: faker.datatype.number(),
      title: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      qty: qty ? Math.floor(Math.random() * (qty - 1 + 1) + 1) : 1,
    });
  }
  return products;
};

describe('cart reducer', () => {
  const mockProduct = {
    id: faker.datatype.number(),
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price()),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    qty: 0,
  };

  it('should return initial state', () => {
    const state = cartReducer(undefined, { type: 'default' });
    expect(state).toEqual(initialState);
  });

  it('should add an element to the cart', () => {
    const state = cartReducer(undefined, {
      type: 'ADD_TO_CART',
      payload: mockProduct,
    });
    expect(state.products).toHaveLength(1);
    expect(state.products[0]).toEqual(expect.objectContaining({ qty: 1 }));
    expect(state.totalAmount).toEqual(mockProduct.price);
    expect(state.totalItems).toEqual(1);
  });
  it('should remove an element to the cart', () => {
    const products = generateProducts(5, 4);
    const initialState = {
      products,
      totalAmount: 0,
      totalItems: 0,
    };

    const state = cartReducer(initialState, {
      type: 'REMOVE_FROM_CART',
      payload: products[0].id,
    });
    expect(state.products).toHaveLength(4);
    expect(state.totalAmount).toEqual(totalPrice(products.slice(1)));
    expect(state.totalItems).toEqual(totalProducts(products.slice(1)));
  });

  it('should increase the quantity of a product', () => {
    const products = generateProducts(2);
    const initialState = {
      products,
      totalAmount: 0,
      totalItems: 0,
    };
    const state = cartReducer(initialState, {
      type: 'INCREASE_QTY',
      payload: products[0].id,
    });
    expect(state.products).toHaveLength(2);
    expect(state.products[0]).toEqual(expect.objectContaining({ qty: 2 }));
    expect(state.totalItems).toEqual(3);
  });
  it('should decrease the quantity of a product', () => {
    const mockProduct = {
      id: faker.datatype.number(),
      title: faker.commerce.productName(),
      price: Number(faker.commerce.price()),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
      qty: 3,
    };
    const initialState = {
      products: [mockProduct],
      totalAmount: totalPrice([mockProduct]),
      totalItems: 3,
    };
    const state = cartReducer(initialState, {
      type: 'DECREASE_QTY',
      payload: mockProduct.id,
    });
    expect(state.products).toHaveLength(1);
    expect(state.products[0]).toEqual(expect.objectContaining({ qty: 2 }));
    expect(state.totalItems).toEqual(2);
    expect(state.totalAmount).toEqual(mockProduct.price * 2);
  });
});
