import { Grid, Typography } from '@mui/material';
import { useHits } from 'react-instantsearch-hooks';
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import noData from '../assets/no-search-result.json';
import CardProduct from '../components/CardProduct';

export function ProductsSearch() {
  const { hits } = useHits();

  if (hits.length === 0) {
    return (
      <>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Hasil Pencarian Tidak Ditemukan
      </Typography>
      <Lottie
        loop
        animationData={noData}
        play
        style={{ width: "100%", height: "300px" }}
      />
      </>
    );
  }

  return (
    <Grid container spacing={3}>
      {hits.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <CardProduct data={item} />
          </Grid>
        ))}
    </Grid>
  );
}