import {configureFonts, DefaultTheme} from 'react-native-paper';
// import {ThemeProp} from 'react-native-paper/lib/typescript/types';
import {baseVariants, customVariants} from './config';

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    config: {
      ...baseVariants,
      ...customVariants,
    },
  }),
};
