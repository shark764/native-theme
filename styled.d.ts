import {} from 'styled-components';
import { DefaultThemeProps } from './src/types';

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeProps {}
}
