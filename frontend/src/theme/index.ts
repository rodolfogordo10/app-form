import getThemeOptions from './themeOptions';

export interface ThemeProps {
  theme: {
    space: number[];
    fontSizes: number[];
    colors: {
      blue: string;
      navy: string;
      black: string;
      white: string;
      primary: string;
    };
  };
}

const theme = () => {
  const theme = getThemeOptions();

  return theme;
};

export default theme;
