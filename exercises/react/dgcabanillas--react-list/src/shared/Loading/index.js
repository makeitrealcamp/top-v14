import React from 'react';
import { CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default Loading
