'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import HeaderWeb from './header-web';
import MenuWeb, { DrawerHeader } from './menu-web';

export default function LayoutWeb({ children}: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderWeb open={open} />
      <MenuWeb
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
