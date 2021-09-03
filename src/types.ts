export type ThemeModeType = 'light' | 'dark';

export interface ThemeColorType {
  main: string;
  secondary: string;
}

export interface ThemeSizeType {
  default: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface DefaultThemeProps {
  mode: ThemeModeType;

  borderRadius: number;

  colors: {
    main: string;
    secondary: string;

    background: ThemeColorType;

    font: ThemeColorType;

    button: ThemeColorType;

    icon: ThemeColorType;
  };

  sizes: {
    font: ThemeSizeType;

    button: ThemeSizeType;

    icon: ThemeSizeType;
  };
}

export interface ThemeProps {
  theme: DefaultThemeProps;
}
