import { css, DefaultTheme } from 'styled-components';
const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    primary: {
      primaryColor: '#00a82d',
      primaryColorDark: '#008f26',
      border: '1px solid #f1f1f1',
      bgColor: '#f8f8f8',
      colorBlack: '#222',
      colorBlackCalm: '#444',
      colorGray: '#737373',
      boxShadow: '#ccc 0px 4px 5px -2px',
    },
  },
  size: {
    small: ' 14px',
    big: ' 26px;',
  },
  icons: {
    eye: css`
      position: absolute;
      top: 8px;
      right: 0;
    `,
  },
};

export default defaultTheme;
