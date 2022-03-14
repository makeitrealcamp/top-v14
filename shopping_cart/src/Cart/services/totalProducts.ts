import { Product } from '../../shared/types/productType';

export const totalProducts = (products: Product[]): number => {
  return products.reduce((total, product) => total + product.qty!, 0);
};
