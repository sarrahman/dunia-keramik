import { Box, Grid } from "@mui/material";
import CardProduct from "../components/CardProduct";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import noData from '../assets/no-data.json';

export default function ListProduct(props) {
  const data = props.data;

  if(data.length === 0) {
    return(
      <Box sx={{ textAlign: "center" }}>
      <Lottie
        loop
        animationData={noData}
        play
        style={{ width: "100%", height: "300px" }}
      />
    </Box>
    )
  }

    return(
        <Grid
        container
        spacing={3}
      >
        {data.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <CardProduct data={item} />
          </Grid>
        ))}
      </Grid>
    )
}