import List from '@mui/material/List';
import { Box, ListSubheader } from '@mui/material';
import MenuItem from './menu-item';
import MailIcon from '@mui/icons-material/Mail';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function MenuList ({ handleDrawerClose }: { handleDrawerClose: () => void }) {
  const t = useTranslations('App');
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <Box sx={{ width: '70vw' }}>
      <List subheader={<ListSubheader>{t('options')}</ListSubheader>}>
        <MenuItem
          handleDrawerClose={handleDrawerClose}
          title={t('home')}
          path={'/'}
          active={isActive('/')}
        >
          <HomeRounded />
        </MenuItem>
        <MenuItem
          handleDrawerClose={handleDrawerClose}
          title={t('example')}
          path={'/example'}
          active={isActive('/example')}
        >
          <MailIcon />
        </MenuItem>
      </List>
    </Box>
  )
}
