import { Card, Grid, Box, Typography } from "@mui/material";
import {useTranslations} from 'next-intl';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz | Home",
};

export default function Home() {
  const t = useTranslations('App');
  return (
    <main>
      <Typography
        variant="body1"
        color={'text.primary'}
        fontWeight={'medium'}
      >{t('title')}</Typography>
      <Box sx={{ flexGrow: 1, mt: '12px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ p: '12px' }}>
              <Typography
                variant="body2"
                color={'text.secondary'}
                fontWeight={'light'}
              >{t('example')}</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
