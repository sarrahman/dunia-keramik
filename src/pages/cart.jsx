import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppBarComp from "../components/AppBar";
import Copyright from "../components/Footer";
import ProductCart from "../components/productCart";
import { getCart } from "../utils/cart";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import emptyCart from "../assets/empty-cart.json";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  return (
    <>
      <AppBarComp />
      <Typography sx={{ p: 2 }} variant="h4" color="primary">
        Keranjang Pesanan
      </Typography>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ProductCart item={item} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center" }}>
                <h3>Keranjang Kosong</h3>
                <Lottie
                  loop
                  animationData={emptyCart}
                  play
                  style={{ width: "100%", height: "300px" }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          backgroundColor: "background.main",
        }}
      >
        <Typography sx={{ p: 2 }} variant="h6">
          Total Harga
        </Typography>
        <Typography sx={{ p: 2 }} variant="h5" color="primary">
          Rp. 0
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button
          sx={{
            width: "50%",
          }}
          variant="contained"
          color="primary"
        >
          Pesan
        </Button>
      </Box>
      <Copyright />
    </>
  );
}
