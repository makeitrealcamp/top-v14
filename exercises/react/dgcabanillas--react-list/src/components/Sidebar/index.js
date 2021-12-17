import React from 'react';
import { Drawer, Toolbar, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import UsersList from '../../shared/UsersList';
import Loading from '../../shared/Loading';

const drawerWidth = 280;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    flexGrow: 1,
  },
  container: {
    width: drawerWidth, 
    boxSizing: 'border-box',
    height: '100%',
  }
});

const Sidebar = ({ users = [], selectUser }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
    >
      <Toolbar />
      <Box className={classes.container}>
        { 
          users.length > 0 
            ? <UsersList users={users} selectUser={selectUser}/>
            : <Loading />
        }
      </Box>
    </Drawer>
  )
}

export default Sidebar;
