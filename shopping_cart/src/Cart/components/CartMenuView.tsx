import React from 'react';
import { Badge, Flex, IconButton } from 'theme-ui';


interface Props {
  totalItems: number;
  showCart: () => void;
}

export const CartMenuView: React.FC<Props> = ({ totalItems, showCart }) => {
  return (
    <Flex>
      <IconButton
        onClick={showCart}
        sx={{
          cursor: 'pointer',
        }}>
        {/* <CartIcon /> */}
      </IconButton>
      <Badge color='red'>{totalItems}</Badge>
    </Flex>
  );
};
