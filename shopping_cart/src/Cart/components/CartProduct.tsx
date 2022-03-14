import React from 'react';
import { Avatar, Text } from 'theme-ui';
import { Product } from '../../shared/types/productType';
import { CartProductActions } from './CartProductActions';
import { RemoveCartItem } from './RemoveCartItem';

export const CartProduct: React.FC<{ product: Product }> = ({
  product,
}): JSX.Element => {
  const { image, title, price, qty, id } = product;
  return (
    <>
      <td>
        <Avatar src={image} />
      </td>
      <td>
        <Text
          sx={{
            fontSize: 1,
          }}>
          {title}{' '}
        </Text>
      </td>
      <td>
        <Text> $ {price}</Text>
      </td>
      <td>
        <CartProductActions qty={qty!} id={id} />
      </td>
      <td>$ {(price * qty!).toFixed(2)}</td>
      <td>
        <RemoveCartItem id={id} />
      </td>
    </>
  );
};
