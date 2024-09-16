'use client';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';
import { TMenuListItemProps } from '../shared/types';

export default function MenuListItemMobile (
  { children, title, path, active, handleDrawerClose }: TMenuListItemProps,
) {
  const theme = useTheme();
  return (
    <Link style={{
      textDecoration: 'none',
      color: 'inherit'
    }} href={path}>
      <ListItem
        onClick={handleDrawerClose}
        key={title}
        disablePadding
        sx={{
          backgroundColor: active ? theme.palette.primary.light : '',
          color: active ? theme.palette.primary.main : '',
          borderRight: active ? `2px solid ${theme.palette.primary.dark}` : ''
        }}
      >
        <ListItemButton>
          <ListItemIcon
            sx={{
              color: active ? '#1890ff' : '',
            }}
          >
            {children}
          </ListItemIcon>
          <ListItemText
            primary={title}
            primaryTypographyProps={{
              fontWeight: 'light',
              fontSize: '14px',
            }}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
