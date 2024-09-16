import List from '@mui/material/List';
import { ListSubheader } from '@mui/material';
import MenuListItemWeb from './menu-list-item-web';
import MailIcon from '@mui/icons-material/Mail';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function MenuListWeb ({ open }: { open: boolean }) {
  const t = useTranslations('App');
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <List subheader={open ? <ListSubheader sx={{
      fontWeight: 'light',
      fontSize: '12px'
    }}>{t('options')}</ListSubheader> : null}>
      <MenuListItemWeb open={open} title={t('home')} path={'/'} active={isActive('/')}>
        <HomeRounded />
      </MenuListItemWeb>
      <MenuListItemWeb open={open} title={t('example')} path={'/example'} active={isActive('/example')}>
        <MailIcon />
      </MenuListItemWeb>
    </List>
  )
}
