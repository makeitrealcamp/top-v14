import React from 'react';
import { Flex } from 'theme-ui';
import { CartMenu } from '../../../Cart/components/CartMenu';
import { MenuNav } from './MenuNav';

export const Navigation = () => {
  return (
    <Flex
      p={2}
      sx={{
        top: 0,
        flexStart: 'end',
        justifyContent: 'space-between',
        backgroundColor: '#ccc',
        position: 'fixed',
        width: '100%',
      }}
    >
      <MenuNav />
      <CartMenu />

    </Flex >);
};
