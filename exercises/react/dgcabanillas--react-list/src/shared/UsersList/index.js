import React from 'react';
import { List } from '@mui/material';
import UserItemList from '../UserItemList';

const UsersList = ({ users = [], selectUser }) => {
  return (
    <List>
      { 
        users.map((user) => {
          return (
            <UserItemList 
              key={user.id} 
              user={user} 
              selectUser={selectUser}
            />
          )
        }) 
      }
    </List>
  )
}

export default UsersList;
