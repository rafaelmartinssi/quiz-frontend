import { Card, Typography } from "@mui/material";
import {useTranslations} from 'next-intl';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | Home",
};

export default function Home() {
  const t = useTranslations('App');
  return (
    <main>
      <Typography variant="h6" sx={{
        marginBottom: '12px'
      }} fontWeight={'500'}>{t('title')}</Typography>
      <Card sx={{
        padding: '12px',
      }}>{t('example')}</Card>
    </main>
  );
}
