import 'styled-components';
interface IPalette {
  primaryColor: string;
  primaryColorDark: string;
  border: string;
  bgColor: string;
  colorBlack: string;
  colorBlackCalm: string;
  colorGray: string;
  boxShadow: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      primary: IPalette;
      secondary?: IPalette;
    };
  }
}
