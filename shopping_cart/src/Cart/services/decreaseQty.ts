import { Product } from '../../shared/types/productType';

export const decreaseQty = (products: Product[], id: number): Product[] => {
  return products.map((product) =>
    product.id === id ? { ...product, qty: product.qty! - 1 } : product
  );
};