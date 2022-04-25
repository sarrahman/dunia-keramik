import { Box, Typography } from "@mui/material";
import AppBarComp from "../components/AppBar";
import Copyright from "../components/Footer";
import FilterButton from "../components/filterButton";
import ListProduct from "../layouts/listProduct";
import { connect } from "react-redux";
import loading from "../assets/loading.json";
import noData from "../assets/no-data.json";
import {
  getProductByTekstur,
  getProductByUkuran,
  getProducts,
  getProductsbyKategori,
} from "../configs/actions";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Lottie from "react-lottie-player/dist/LottiePlayerLight";

function Products(props) {
  const [product, setProduct] = useState([]);
  const [tekstur, setTekstur] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [kategori, setKategori] = useState("");
  const [filter, setFilter] = useSearchParams();
  const url = window.location.href;
  const [message, setMessage] = useState("Loading...");
  const [anime, setAnime] = useState(loading);

  useEffect(() => {
    setTekstur(filter.get("tekstur"));
    setUkuran(filter.get("ukuran"));
    setKategori(filter.get("kategori"));
    if (tekstur !== "" && tekstur !== undefined && tekstur !== null) {
      props
        .getProductByTekstur(tekstur)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    } else if (ukuran !== "" && ukuran !== undefined && ukuran !== null) {
      props
        .getProductByUkuran(ukuran)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    } else if (kategori !== "" && kategori !== undefined && kategori !== null) {
      props
        .getProductByKategori(kategori)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    } else if (!url.includes("?")) {
      props
        .getProducts()
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err))
    } else {
      setTimeout(() => {
        setAnime(noData);
        setMessage("Keramik Tidak Ditemukan");
      }, 15000);
    }
  }, [filter, kategori, props, tekstur, ukuran, url]);

  return (
    <>
      <AppBarComp />
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <FilterButton
            value={(value) => setFilter({ ukuran: value })}
            nama="ukuran"
            data={["60x60", "50x50", "40x40"]}
          />
          <FilterButton
            value={(value) => setFilter({ tekstur: value })}
            nama="tekstur"
            data={["glossy", "wood", "stone", "deco", "matte"]}
          />
        </Box>
      </Box>
      <Box
        sx={{
          p: 2,
        }}
      >
        {product.length > 0 ? (
          <ListProduct data={product} />
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">{message}</Typography>
            <Lottie
              loop
              animationData={anime}
              play
              style={{ width: "100%", height: "300px" }}
            />
          </Box>
        )}
      </Box>
      <Copyright />
    </>
  );
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxActions = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  getProductByTekstur: (tekstur) => dispatch(getProductByTekstur(tekstur)),
  getProductByUkuran: (ukuran) => dispatch(getProductByUkuran(ukuran)),
  getProductByKategori: (kategori) => dispatch(getProductsbyKategori(kategori)),
});

export default connect(reduxState, reduxActions)(Products);
