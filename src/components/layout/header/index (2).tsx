import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { Box } from '@mui/material';
import { useThemeContext } from '@/context/theme-context';
import React from 'react';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header ({ open, handleDrawerOpen }: { open: boolean; handleDrawerOpen: () => void }) {
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
    open={open}
  >
    <Toolbar>
      <IconButton
        color="default"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          marginRight: 5,
          display: open ? 'none' : '',
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
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
