import {createTheme} from '@shopify/restyle';

export const palette = {
  primary: '#1AC0C6',
  primaryD: '#03A89E',
  secondary: '#201C26',
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  redL: '#FF4141',
  grayL: '#F0F0F0',
  grayM: '#606060',
  grayD: '#404040',
  green: '#00FF00',
  greenL: '#99FF99',
  offWhite: '#F5F5F5',
  transparent: 'transparent',
  darkBackground: '#2E2E2E',
};

export const theme = createTheme({
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
    '3xl': 64,
  },
  colors: {
    background: palette.white,
    primary: palette.primary,
    secondary: palette.secondary,
    text: palette.black,
    lightText: palette.grayM,
    error: palette.red,
    success: palette.green,
    transparent: palette.transparent,
    dark: palette.black,
    cardBackround: palette.offWhite,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      fontSize: 14,
      color: 'text',
    },
    title: {
      fontSize: 20,
      color: 'text',
      fontWeight: 'bold',
    },
    buttonLabel: {
      color: 'background',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonLabelBorder: {
      color: 'text',
      fontSize: 16,
      fontWeight: 'bold',
    },
  },

  cardVariants: {
    defaults: {
      borderRadius: 10,
      height: '40%',
      width: '80%',
      backgroundColor: 'cardBackround',
    },
    elevated: {
      shadowColor: 'dark',
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: 1},
      elevation: 5,
      backgroundColor: 'cardBackround',
    },
  },
  buttonVariants: {
    defaults: {
      height: 54,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: 'primary',
    },
    outline: {
      backgroundColor: 'background',
      borderWidth: 1,
      borderColor: 'primary',
    },
    disabled: {
      backgroundColor: 'lightText',
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.darkBackground,
    primary: palette.primaryD,
    secondary: palette.secondary,
    text: palette.white,
    lightText: palette.grayL,
    error: palette.redL,
    success: palette.greenL,
    cardBackround: palette.grayD,
  },
};
