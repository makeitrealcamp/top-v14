import { Product } from '../../shared/types/productType';

export const addToCart = (products: Product[], product: Product): Product[] => {
  product.qty = 1;
  return [...products, product];
};
