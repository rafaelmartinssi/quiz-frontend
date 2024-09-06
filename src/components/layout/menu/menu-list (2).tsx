import List from '@mui/material/List';
import { ListSubheader } from '@mui/material';
import MenuItem from './menu-item';
import MailIcon from '@mui/icons-material/Mail';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { usePathname } from 'next/navigation';

export default function MenuList ({ open }: { open: boolean }) {
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <List subheader={open ? <ListSubheader>Settings</ListSubheader> : null}>
      <MenuItem open={open} title='Home' path={'/'} active={isActive('/')}>
        <HomeRounded />
      </MenuItem>
      <MenuItem open={open} title='Example' path={'/example'} active={isActive('/example')}>
        <MailIcon />
      </MenuItem>
    </List>
  )
}
