import type { DefaultTheme } from 'styled-components/native';

export interface DefaultThemeProps extends DefaultTheme {}

export interface ThemeProps {
  theme: DefaultTheme;
}
