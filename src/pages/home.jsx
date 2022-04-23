import AppBarComp from "../components/AppBar";
import { Box, Button } from "@mui/material";
import ImageButtonComp from "../components/ImageButton";
import Copyright from "../components/Footer";
import {useNavigate} from "react-router-dom";
import TextSearch from "../components/textSearch";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <AppBarComp />
     <TextSearch />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 2, md: 4 },
          alignItems: "center",
        }}
      >
        <ImageButtonComp />
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        mb: 3,
      }}>
      <Button onClick={() => navigate('/products')} variant="outlined" color="secondary">Semua Products</Button>
      </Box>
        <Copyright />
    </>
  );
}
