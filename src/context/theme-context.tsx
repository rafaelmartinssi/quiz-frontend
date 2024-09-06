'use client';

import React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeDark, themeLight } from "@/config/theme";

type IThemeContext = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = React.createContext<IThemeContext | null>(null);

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  return context as IThemeContext;
}

export function ThemeContextProvider(
  { children }: { children: React.ReactNode }
) {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = darkMode ? themeDark : themeLight;
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ThemeContext.Provider>
  );
}
