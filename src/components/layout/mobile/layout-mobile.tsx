'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import HeaderMobile from './header-mobile';
import MenuMobile, { DrawerHeader } from './menu-mobile';

export default function LayoutMobile({ children}: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderMobile handleDrawerOpen={handleDrawerOpen} />
      <MenuMobile open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
