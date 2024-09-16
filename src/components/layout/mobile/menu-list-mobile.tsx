import List from '@mui/material/List';
import { Box, ListSubheader } from '@mui/material';
import MenuListItemMobile from './menu-list-item-mobile';
import MailIcon from '@mui/icons-material/Mail';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function MenuListMobile ({ handleDrawerClose }: { handleDrawerClose: () => void }) {
  const t = useTranslations('App');
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <Box sx={{ width: '70vw' }}>
      <List subheader={<ListSubheader sx={{
        fontWeight: 'light',
        fontSize: '12px'
      }}>{t('options')}</ListSubheader>}>
        <MenuListItemMobile
          handleDrawerClose={handleDrawerClose}
          title={t('home')}
          path={'/'}
          active={isActive('/')}
        >
          <HomeRounded />
        </MenuListItemMobile>
        <MenuListItemMobile
          handleDrawerClose={handleDrawerClose}
          title={t('example')}
          path={'/example'}
          active={isActive('/example')}
        >
          <MailIcon />
        </MenuListItemMobile>
      </List>
    </Box>
  )
}
