import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MenuList from './menu-list';

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MenuMobile({ open, handleDrawerClose }: { open: boolean; handleDrawerClose: () => void }) {
  return (
    <Drawer open={open} onClose={handleDrawerClose}>
      <DrawerHeader>
        <IconButton
          sx={{ display: open ? '' : 'none' }}
          onClick={handleDrawerClose}
        >
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <MenuList handleDrawerClose={handleDrawerClose} />
    </Drawer>
  )
}
