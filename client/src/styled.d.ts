import 'styled-components';
import { FlattenSimpleInterpolation } from 'styled-components';
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
interface ISize {
  small: string;
  big: string;
}
interface IIcons {
  eye: FlattenSimpleInterpolation;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      primary: IPalette;
      secondary?: IPalette;
    };
    size: ISize;
    icons: IIcons;
  }
}
