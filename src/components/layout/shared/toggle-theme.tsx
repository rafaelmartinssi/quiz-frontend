import * as React from 'react';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { useThemeContext } from '@/context/theme-context';
import { IconButton } from '@mui/material';

export default function ToggleTheme() {
  const [mode, setMode] = React.useState(false);
  const { setDarkMode } = useThemeContext();

  React.useEffect(() => {
    setDarkMode(mode);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
  return (
    <IconButton
      size="large"
      aria-label="notifications"
      color="default"
      onClick={() => setMode(!mode)}
    >
      { mode ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
}
