'use client';

import React from "react";
import { useMediaQuery } from '@mui/material';

type ILayoutContext = {
  device: 'MOBILE' | 'WEB';
}

const LayoutContext = React.createContext<ILayoutContext | null>(null);

export const useLayoutContext = () => {
  const context = React.useContext(LayoutContext);
  return context as ILayoutContext;
}

export function LayoutContextProvider(
  { children }: { children: React.ReactNode }
) {
  const device = useMediaQuery('(max-width:600px)') ? 'MOBILE' : 'WEB';

  return (
    <LayoutContext.Provider value={{ device }}>
      {children}
    </LayoutContext.Provider>
  );
}
