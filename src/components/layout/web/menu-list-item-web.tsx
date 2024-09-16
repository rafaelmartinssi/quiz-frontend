'use client';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';
import { TMenuListItemProps } from '../shared/types';

export default function MenuListItemWeb (
  { children, open, title, path, active }: TMenuListItemProps
) {
  const theme = useTheme();
  return (
    <Link style={{
      textDecoration: 'none',
      color: 'inherit'
    }} href={path}>
      <ListItem
        key={title}
        disablePadding
        sx={{
          display: 'block',
          backgroundColor: active ? theme.palette.primary.light : '',
          color: active ? theme.palette.primary.main : '',
          borderRight: active ? `2px solid ${theme.palette.primary.dark}` : ''
        }}
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              color: active ? '#1890ff' : '',
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
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
            sx={{
              opacity: open ? 1 : 0
            }}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
