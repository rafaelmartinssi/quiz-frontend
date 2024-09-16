import { Avatar, Box, Button, Divider, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from "react";
import { Logout, Settings } from "@mui/icons-material";
import {useTranslations} from 'next-intl';
import ToggleTheme from "./preferences/toggle-theme";

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
        startIcon={
          <AccountCircle sx={{ width: 30, height: 30, color: 'text.secondary' }} fontSize="small" />
        }
      >
        <Typography
          variant="body2"
          color={'text.primary'}
          fontWeight={'medium'}
        >John Doe</Typography>
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
        <Box sx={{ flexGrow: 1, px: '15px', py: '20px' }}>
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
