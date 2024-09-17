import { Avatar, Box, Button, Icon, ListItemIcon, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";
import { Logout, Settings } from "@mui/icons-material";
import {useTranslations} from 'next-intl';
import ToggleTheme from "./preferences/toggle-theme";
import ToggleLocale from "./preferences/toggle-locale";

export default function UserSettings () {
  const t = useTranslations('App');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        onClick={handleClick}
        sx={{
          textTransform: 'none',
          borderRadius: '5px'
        }}
        variant="text"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ width: '35px', height: '35px' }} src={'/avatars/avatar-woman.png'} />
          <Typography
            variant="body2"
            color={'text.primary'}
            fontWeight={'medium'}
          >
            John Doe
          </Typography>
        </Stack>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            sx: {
              filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.32))',
              mt: 1.5,
            },
          },
        }}
      >
        <Box sx={{ flexGrow: 1, px: '16px', pt: '16px' }}>
          <Typography
            sx={{ pb: '10px' }}
            variant="body2"
            color={'text.primary'}
            fontWeight={'light'}
          >
            {t('preferences')}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, px: '16px', pb: '16px' }}>
          <Typography
            sx={{ pb: '10px' }}
            variant="body2"
            color={'text.primary'}
            fontWeight={'light'}
          >
            {t('theme')}
          </Typography>
          <ToggleTheme />
        </Box>
        <Box sx={{ flexGrow: 1, px: '16px', pb: '16px' }}>
          <Typography
            sx={{ pb: '10px' }}
            variant="body2"
            color={'text.primary'}
            fontWeight={'light'}
          >
            {t('locale')}
          </Typography>
          <ToggleLocale />
        </Box>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="body2"
            color={'text.primary'}
            fontWeight={'light'}
          >{t('settings')}</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Typography
            variant="body2"
            color={'text.primary'}
            fontWeight={'light'}
          >{t('logout')}</Typography>
        </MenuItem>
      </Menu>
    </div>
  )
}
