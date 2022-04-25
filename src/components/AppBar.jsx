import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  CardMedia,
  IconButton,
  Toolbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';


export default function AppBarComp() {
  const navigate = useNavigate();
  const [quantityCart, setQuantityCart] = useState(0);

  useEffect(() => {
    const cart = localStorage.getItem("CART");
    if (cart) {
      setQuantityCart(JSON.parse(cart).length);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
         <Box sx={{
            display: "flex",
         }}>
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: {md: 2} }}
          >
            <MenuIcon />
          </IconButton>
         <CardMedia
            sx={{ cursor: "pointer", width: 160 }}
            component="img"
            onClick={() => navigate("/")}
            src="https://ik.imagekit.io/duniakeramik/Dunia_Keramik__2_-removebg-preview_TJiuJARjl.png"
            alt="logo"
          />

         </Box>
          <Box>
            <IconButton sx={{
              mr: 2,
            }}
              onClick={() => navigate("/pencarian")}
              color="background"
            >
              <SearchIcon />
            </IconButton>
            <IconButton onClick={() => navigate("/cart")} color="background">
              <Badge badgeContent={quantityCart} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
