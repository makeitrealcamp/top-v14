import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Close, Flex } from 'theme-ui';

interface Props {
  onClose: () => void;
}

export const PortalModal: React.FC<Props> = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 999,
        backgroundColor: '#24242480',
      }}>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          minHeight: '60%',
          maxHeight: '80%',
          backgroundColor: '#efefef',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Flex
          sx={{
            flexDirection: 'row-reverse',
            backgroundColor: '#8e8d8d',
          }}>
          <Close
            onClick={onClose}
            sx={{
              cursor: 'pointer',
            }}
          />
        </Flex>

        {children}
      </Box>
    </Box>,
    document.getElementById('modal')!
  );
};
