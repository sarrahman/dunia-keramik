import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
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

function Product(props) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [open, setOpen] = useState(false);

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
                Rp. {product.price}
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
                    setQuantity(quantity + 1);
                  }}
                >
                  <AddIcon color="secondary" />
                </IconButton>
                <IconButton>
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                    }}
                  >
                    {quantity}
                  </Typography>
                </IconButton>
                <IconButton
                  onClick={() => {
                    if (quantity > 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  <RemoveIcon color="secondary" />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Button
                  sx={{ mr: { xs: 0, md: 1 }, mb: { xs: 1, md: 0 } }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    insertData({ id, quantity, product });
                    setOpen(true);
                  }}
                >
                  <AddShoppingCartIcon sx={{ mr: 1 }} /> Tambah Keranjang
                </Button>
                <Button variant="contained" color="secondary">
                  <WhatsAppIcon sx={{ mr: 1 }} /> Chat Whatsapp
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Copyright />
      <SnackNotif
        status="success"
        message={`${quantity} dus ditambahkan ke keranjang`}
        open={open}
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
