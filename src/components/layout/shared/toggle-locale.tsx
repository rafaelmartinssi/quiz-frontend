import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Translate from '@mui/icons-material/Translate';
import {useTranslations} from 'next-intl';
import { useTheme } from "@mui/material";
import React from "react";
import { getUserLocale, setUserLocale } from "@/utils/locale";

export default function ToggleLocale () {
  const theme = useTheme();
  const backgroundPrimaryLight = theme.palette.primary.light
  const colorPrimaryMain = theme.palette.primary.main

  const t = useTranslations('Locale');

  const [locale, setLocale] = React.useState<string>('');
  React.useEffect(() => {
    async function getLocaleCookie() {
      const locale = await getUserLocale();
      setLocale(locale);
    }
    getLocaleCookie();
  }, [])

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickItem = async (value: string) => {
    setAnchorEl(null);
    await setUserLocale(value);
    setLocale(value);
  };

  const isPt = React.useMemo(() => {
    return locale === 'pt';
  }, [locale])

  return (
    <div>
      <IconButton
        aria-label="locale"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        size="large"
        color="default"
      >
        <Translate />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        slotProps={{
          paper: {
            sx: {
              filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.32))',
              mt: 1.1,
            },
          },
        }}
      >
        <MenuItem
          sx={{
            backgroundColor: isPt ? backgroundPrimaryLight : '',
            color: isPt ? colorPrimaryMain : ''
          }}
          key={'pt'}
          selected={isPt}
          onClick={() => handleClickItem('pt')}
        >
          <Typography
            variant="body2"
            fontWeight={'light'}
          >{t('pt')}</Typography>
        </MenuItem>
        <MenuItem
          sx={{
            backgroundColor: !isPt ? backgroundPrimaryLight : '',
            color: !isPt ? colorPrimaryMain : ''
          }}
          key={'en'}
          selected={!isPt}
          onClick={() => handleClickItem('en')}
        >
          <Typography
            variant="body2"
            fontWeight={'light'}
          >{t('en')}</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}
