'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import HeaderWeb from './header-web/index';
import MenuWeb, { DrawerHeader } from './menu-web/index';
import { useMediaQuery } from '@mui/material';
import MenuMobile from './menu-mobile';
import HeaderMobile from './header-mobile';

export default function Layout({ children}: { children: React.ReactNode }) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(isMobile)
  return (
    <Box sx={{ display: 'flex' }}>
      { isMobile ?
        <HeaderMobile handleDrawerOpen={handleDrawerOpen} /> :
        <HeaderWeb open={open} handleDrawerOpen={handleDrawerOpen} />
      }
      { isMobile ?
        <MenuMobile open={open} handleDrawerClose={handleDrawerClose} /> :
        <MenuWeb open={open} handleDrawerClose={handleDrawerClose} />
      }
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
