import React from 'react';
import { Button, ListItem, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

const UserItemList = ({ user, selectUser }) => {
  return (
    <ListItem>
      <Button 
        size='small' 
        color="primary" 
        fullWidth variant="outlined"
        onClick={() => selectUser(user.id)}
        endIcon={<SendIcon />}
      >
        <Typography 
          variant="caption" 
          style={{ fontWeight: 600 }}
        >
          { user.name }
        </Typography>
      </Button>
    </ListItem>
  )
}

export default UserItemList;