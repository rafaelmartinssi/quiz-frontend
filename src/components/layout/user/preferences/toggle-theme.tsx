import * as React from 'react';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { useThemeContext } from '@/context/theme-context';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import {useTranslations} from 'next-intl';

export default function ToggleTheme() {
  const t = useTranslations('App');
  const { darkMode, setDarkMode } = useThemeContext();

  const handleChange = (event: React.MouseEvent<HTMLElement>, value: boolean) => {
    setDarkMode(value);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      exclusive
      value={darkMode }
      onChange={handleChange}
    >
      <ToggleButton
        sx={{
          width: '100px',
          textTransform: 'none',
          borderColor: !darkMode ? 'primary.main' : '',
          borderRightColor: darkMode ? 'primary.dark' : ''
        }}
        selected={darkMode === false}
        value={false}
      >
        <LightMode />
        <Typography
          sx={{ ml: '5px' }}
          variant="body2"
          fontWeight={'light'}
        >
          {t('light')}
        </Typography>
      </ToggleButton>
      <ToggleButton
        sx={{
          width: '100px',
          textTransform: 'none',
          borderColor: darkMode ? 'primary.dark' : '',
        }}
        selected={darkMode === true}
        value={true}
      >
        <DarkMode />
        <Typography
          sx={{ ml: '5px', color: !darkMode ? 'text.primary' : '' }}
          variant="body2"
        >
          {t('dark')}
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
