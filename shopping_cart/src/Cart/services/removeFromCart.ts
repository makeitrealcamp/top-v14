import { Product } from '../../shared/types/productType';

export const removeFromCart = (products: Product[], id: number): Product[] => {
  return products.filter((product) => product.id !== id);
};
