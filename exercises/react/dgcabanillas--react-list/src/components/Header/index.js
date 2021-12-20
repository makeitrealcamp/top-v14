import React from 'react';
import { AppBar, Toolbar, Typography, Hidden } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" align="center" style={{ width: '100%' }}>
          <Hidden smUp> DGCC </Hidden> 
          <Hidden smDown> Diego Cabanillas </Hidden> 
          - React List
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
