import List from '@mui/material/List';
import { ListSubheader } from '@mui/material';
import MenuItem from './menu-item';
import MailIcon from '@mui/icons-material/Mail';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { usePathname } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function MenuList ({ open }: { open: boolean }) {
  const t = useTranslations('App');
  const pathname = usePathname();
  function isActive(path: string) {
    return pathname === path;
  }
  return (
    <List subheader={open ? <ListSubheader>{t('options')}</ListSubheader> : null}>
      <MenuItem open={open} title={t('home')} path={'/'} active={isActive('/')}>
        <HomeRounded />
      </MenuItem>
      <MenuItem open={open} title={t('example')} path={'/example'} active={isActive('/example')}>
        <MailIcon />
      </MenuItem>
    </List>
  )
}
