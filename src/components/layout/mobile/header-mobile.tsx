import Toolbar from '@mui/material/Toolbar';
import { AppBar, Box } from '@mui/material';
import ToggleLocale from '../shared/toggle-locale';
import React from 'react';
import ToggleTheme from '../shared/toggle-theme';
import ToggleMenu from '../shared/toggle-menu';

export default function HeaderMobile ({ handleDrawerOpen }: { handleDrawerOpen: () => void }) {
  return (
  <AppBar
    position="fixed"
    elevation={0}
  >
    <Toolbar>
      <ToggleMenu handleDrawerOpen={handleDrawerOpen} />
      <Box sx={{ flexGrow: 1 }} />
      <ToggleLocale />
      <ToggleTheme />
    </Toolbar>
  </AppBar>
  )
}
