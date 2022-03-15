import { Product } from '../../shared/types/productType';

export const productDTO = (products: Product[]) =>
  products.map(({ title, price, qty, image }) => {
    return {
      title,
      quantity: qty,
      currency_id: 'COP',
      unit_price: price,
      picture_url: image,
    };
  });
