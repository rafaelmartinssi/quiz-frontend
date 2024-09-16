import { Box, Grid, Typography } from "@mui/material";
import { Metadata } from "next";
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: "Quiz | Example",
};

export default function Example() {
  const t = useTranslations('App');
  return (
    <main>
    <Typography>{t('example')}</Typography>
  </main>
  )
}
