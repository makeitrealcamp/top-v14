import React from 'react';
import { Flex, NavLink } from 'theme-ui';

export const MenuNav = () => {
  return (
    <Flex as="nav">
      <NavLink href="#!" p={2}>
        Home
      </NavLink>
      <NavLink href="#!" p={2}>
        Products
      </NavLink>
      <NavLink href="#!" p={2}>
        About
      </NavLink>
    </Flex>
  );
};
