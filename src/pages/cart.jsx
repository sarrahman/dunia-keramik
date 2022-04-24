import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppBarComp from "../components/AppBar";
import Copyright from "../components/Footer";
import ProductCart from "../components/productCart";
import { getCart } from "../utils/cart";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";
import emptyCart from "../assets/empty-cart.json";
import { fCurrency } from "../utils/formatNumber";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCart(getCart());
    let totalPrice = [];
    // eslint-disable-next-line array-callback-return
    cart.map((item) => {
      totalPrice.push(item.product.price * item.quantity);
    });
    setTotal(totalPrice.reduce((a, b) => a + b, 0));
  }, [cart]);

  return (
    <>
      <AppBarComp />
      <Typography sx={{ p: 2 }} variant="h5" color="primary">
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
          Rp. {fCurrency(total)}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
        }}
      >
        {cart.length > 0 ? (
          <a
            style={{
              textDecoration: "none",
            }}
            href={`https://api.whatsapp.com/send?phone=6281249363040&text=Pesanan%20Barang%20%3A%20%0A${cart.map(
              (item, index) =>
                `${index + 1}.${item.product.kategori} ${item.product.ukuran} ${item.product.name}%20%3D%3E%20${item.quantity}%20dus%0A`
            )}`}
          >
            <Button variant="contained" color="secondary">
              Pesan
            </Button>
          </a>
        ) : (
          <Button
            sx={{
              width: "50%",
            }}
            variant="contained"
            color="primary"
            disabled
          >
            Pesan
          </Button>
        )}
      </Box>
      <Copyright />
    </>
  );
}
