import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { AppBar, Box } from '@mui/material';
import { useThemeContext } from '@/context/theme-context';
import ToggleLocale from '../header-web/toggle-locale';
import React from 'react';

export default function HeaderMobile ({ handleDrawerOpen }: { handleDrawerOpen: () => void }) {
  const [mode, setMode] = React.useState(false);
  const { setDarkMode } = useThemeContext();

  React.useEffect(() => {
    setDarkMode(mode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
  <AppBar
    position="fixed"
    elevation={0}
  >
    <Toolbar>
      <IconButton
        color="default"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <ToggleLocale />
      <IconButton
        size="large"
        aria-label="notifications"
        color="default"
        onClick={() => setMode(!mode)}
      >
        { mode ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Toolbar>
  </AppBar>
  )
}
