import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box } from '@mui/material';
import React from 'react';
import ToggleLocale from '../shared/toggle-locale';
import ToggleTheme from '../shared/toggle-theme';
import UserSettings from '../user/user-settings';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 260;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  //zIndex: theme.zIndex.drawer + 1, Faz o AppBar sobrepor Drawer
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

export default function HeaderWeb ({ open }: { open: boolean }) {


  return (
  <AppBar
    position="fixed"
    elevation={0}
    open={open}
  >
    <Toolbar>
      <Box sx={{ flexGrow: 1 }} />
      <UserSettings />
    </Toolbar>
  </AppBar>
  )
}
