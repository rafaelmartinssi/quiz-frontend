import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import {useTranslations} from 'next-intl';
import React from "react";
import { getUserLocale, setUserLocale } from "@/utils/locale";
import { useThemeContext } from '@/context/theme-context';

export default function ToggleLocale () {
  const t = useTranslations('Locale');
  const { darkMode } = useThemeContext();

  const [locale, setLocale] = React.useState<string>('');

  function getClassPt(): string {
    if(isPt && darkMode) {
      return 'primary.dark'
    }
    if(isPt && !darkMode) {
      return 'primary.main'
    }
    return ''
  }

  function getClassEn(): string {
    if(!isPt && darkMode) {
      return 'primary.dark'
    }
    if(!isPt && !darkMode) {
      return 'primary.main'
    }
    return ''
  }

  React.useEffect(() => {
    async function getLocaleCookie() {
      const locale = await getUserLocale();
      setLocale(locale);
    }
    getLocaleCookie();
  }, [])


  const isPt = React.useMemo(() => {
    return locale === 'pt';
  }, [locale])

  const handleChange = async (event: React.MouseEvent<HTMLElement>, value: string) => {
    await setUserLocale(value);
    setLocale(value);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      exclusive
      value={locale}
      onChange={handleChange}
    >
      <ToggleButton
        sx={{
          width: '100px',
          textTransform: 'none',
          borderColor: getClassPt(),
          borderRightColor: !isPt ? 'primary.dark' : ''
        }}
        selected={locale === 'pt'}
        value={'pt'}
      >
        <Typography
          sx={{
            ml: '5px',
            color: isPt ? 'primary.main' : 'text.primary'
          }}
          variant="body2"
          fontWeight={'light'}
        >
          {t('pt')}
        </Typography>
      </ToggleButton>
      <ToggleButton
        sx={{
          width: '100px',
          textTransform: 'none',
          borderColor: getClassEn(),
        }}
        selected={locale === 'en'}
        value={'en'}
      >
        <Typography
          sx={{ ml: '5px', color: isPt ? 'text.primary' : '' }}
          variant="body2"
        >
          {t('en')}
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
