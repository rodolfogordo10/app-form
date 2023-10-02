import { deviceSize } from 'utils/constants';
import { merge } from 'lodash';
import { colors } from './colors';
import shadows from './shadows';

const breakpoints: any = Object.keys(deviceSize).map(
  (key) => deviceSize[key] + 'px',
);

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const THEMES = {
  GIFT: 'GIFT',
  HEALTH: 'HEALTH',
  DEFAULT: 'DEFAULT',
  GROCERY: 'GROCERY',
  FURNITURE: 'FURNITURE',
};

const themesOptions = {
  [THEMES.DEFAULT]: { colors, shadows, breakpoints },
  [THEMES.GROCERY]: { shadows, breakpoints, colors },
  [THEMES.FURNITURE]: {
    shadows,
    breakpoints,
    colors: {
      ...colors,
      primary: { ...colors.primary, main: colors.paste.main },
    },
  },
  [THEMES.HEALTH]: {
    shadows,
    breakpoints,
    colors: {
      ...colors,
      primary: { ...merge({ ...colors.primary }, { ...colors.blue }) },
    },
  },
  [THEMES.GIFT]: {
    shadows,
    breakpoints,
    colors: {
      ...colors,
      primary: { ...colors.primary, main: colors.marron.main },
    },
  },
};

function getThemeOptions() {
  let themeOption: any;

  /*
    YOU CAN ALSO REMOVE updateTheme function
    AND FOLLOWING ENTIRE switch case BLOCK.
  */
  const updateTheme = (themeName: string) => {
    themeOption = themesOptions[themeName];
  };

  updateTheme(THEMES.FURNITURE);

  themeOption = themesOptions[THEMES.FURNITURE];

  return themeOption;
}

export default getThemeOptions;
