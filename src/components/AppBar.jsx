import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Badge,
  Box,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Produk", "Kalkulator"];

export default function AppBarComp() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const [quantityCart, setQuantityCart] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      if (page === "Kalkulator") {
                        navigate("/kalkulator");
                      } else if (page === "Produk") {
                        navigate("/products");
                      } else if (page === "Home") {
                        navigate("/");
                      }
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <CardMedia
              sx={{ cursor: "pointer", width: 160 }}
              component="img"
              onClick={() => navigate("/")}
              src="https://ik.imagekit.io/duniakeramik/Dunia_Keramik__2_-removebg-preview_TJiuJARjl.png"
              alt="logo"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <IconButton
              sx={{
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
