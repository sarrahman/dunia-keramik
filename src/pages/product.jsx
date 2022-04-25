import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import AppBarComp from "../components/AppBar";
import Copyright from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductImage from "../components/ProductImage";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { connect } from "react-redux";
import { getProduct } from "../configs/actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { insertData } from "../utils/cart";
import SnackNotif from "../components/snacknotif";
import { fCurrency } from "../utils/formatNumber";

function Product(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState({
    open: false,
    message: "",
    status: "success",
  });

  useEffect(() => {
    props
      .getProduct(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id, props]);

  return (
    <>
      <AppBarComp />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: { xs: "50vh", md: "75vh" },
            }}
          >
            <ProductImage name={product.name} image={product.image} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: { xs: "50vh", md: "75vh" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: { xs: 2, md: 5 },
              }}
            >
              <Typography
                sx={{ mb: { xs: 1, md: 2 } }}
                variant="h4"
                color="text.primary"
              >
                {product.name}
              </Typography>
              <Typography
                sx={{ mb: { xs: 1, md: 2 } }}
                variant="h6"
                color="primary"
              >
                Rp. {fCurrency(product.price)}
              </Typography>
              <List>
                <ListItem disablePadding>
                  <ListItemText primary={`brand : ${product.brand}`} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary={`ukuran : ${product.ukuran}`} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText primary={`tekstur : ${product.tekstur}`} />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary={`Penggunaan : ${product.penggunaan}`}
                  />
                </ListItem>
              </List>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <IconButton
                  onClick={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <RemoveIcon color="secondary" />
                </IconButton>
                <TextField
                  sx={{
                    width: "4.5rem",
                  }}
                  size="small"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <IconButton
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  <AddIcon color="secondary" />
                </IconButton>
              </Box>
              <Box
                sx={{
                  mt: { xs: 2, md: 1 },
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Button
                  sx={{ mr: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    if (quantity > 0) {
                      insertData({ product, quantity });
                      setValue({
                        open: true,
                        message: "Produk berhasil ditambahkan ke keranjang",
                        status: "success",
                      });
                      setTimeout(() => {
                        window.location.reload();
                      }, 1000);
                    } else {
                      setValue({
                        open: true,
                        message: "jumlah produk harus lebih dari 0",
                        status: "error",
                      });
                    }
                  }}
                >
                  <AddShoppingCartIcon sx={{ mr: 1 }} /> Tambah Keranjang
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = `https://api.whatsapp.com/send?phone=6281249363040&text=Hallo admin, saya ingin menanyakan *${product.kategori} ${product.name}* ukuran ${product.ukuran}`;
                  }}
                  variant="contained"
                  color="secondary"
                >
                  <WhatsAppIcon sx={{ mr: 1 }} /> Chat Whatsapp
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Copyright />
      <SnackNotif
        status={value.status}
        message={value.message}
        open={value.open}
      />
    </>
  );
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxActions = (dispatch) => ({
  getProduct: (id) => dispatch(getProduct(id)),
});

export default connect(reduxState, reduxActions)(Product);
