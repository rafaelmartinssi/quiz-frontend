'use client';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react';

type TMenuItemProps = {
  children: React.ReactNode
  title: string,
  path: string,
  active: boolean,
  handleDrawerClose: () => void
}

export default function MenuItem ({ children, title, path, active, handleDrawerClose }: TMenuItemProps) {
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
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}
