'use client';

import { createTheme } from '@mui/material/styles';
import { ptBR } from '@mui/material/locale';

export const themeDark = createTheme(
  {
    palette : {
      mode: 'dark',
      background: {
        default: '#141414',
        paper: '#0f1214'
      },
      primary: {
        light: '#003b7566',
        main: '#66B3FF',
        dark: '#096dd9'
      },
      secondary: {
        light: '#fafafa',
        main: '#bfbfbf',
        dark: '#8c8c8c'
      },
      success: {
        light: '#f6ffed',
        main: '#95de64',
        dark: '#52c41a'
      },
      error: {
        light: '#fff1f0',
        main: '#ff7875',
        dark: '#f5222d'
      },
      warning: {
        light: '#fffbe6',
        main: '#ffd666',
        dark: '#faad14'
      },
    },
    typography: {
      fontFamily: `'Public Sans', sans-serif`,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#0f1214',
            borderBottom: '1px solid #ffffff1f'
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#66B3FF',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: '1px solid #ffffff1f'
          }
        },
        defaultProps: {
          elevation: 0,
          variant: 'outlined',
        },
      }
    }
  },
  ptBR
);

export const themeLight = createTheme(
  {
    palette : {
      mode: 'light',
      background: {
        default: '#fafafb',
        paper: '#ffffff'
      },
      primary: {
        light: '#e6f7ff',
        main: '#1890ff',
        dark: '#096dd9'
      },
      secondary: {
        light: '#fafafa',
        main: '#bfbfbf',
        dark: '#8c8c8c'
      },
      success: {
        light: '#f6ffed',
        main: '#95de64',
        dark: '#52c41a'
      },
      error: {
        light: '#fff1f0',
        main: '#ff7875',
        dark: '#f5222d'
      },
      warning: {
        light: '#fffbe6',
        main: '#ffd666',
        dark: '#faad14'
      },
      text: {
        primary: '#262626',
        secondary: '#8c8c8c',
//      disabled: '#'
      },
    },
    typography: {
      fontFamily: `'Public Sans', sans-serif`,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#fff',
            borderBottom: '1px solid #e0e0e0'
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: '1px solid #e0e0e0'
          }
        },
        defaultProps: {
          elevation: 0,
        },
      }
    }
  },
  ptBR
);
