import { Product } from '../../shared/types/productType';

export const totalPrice = (products: Product[]): number => {
  return products.reduce(
    (total, product) => total + product.price * product.qty!,
    0
  );
};
