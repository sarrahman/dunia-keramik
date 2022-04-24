import { Box } from "@mui/material";
import AppBarComp from "../components/AppBar";
import Copyright from "../components/Footer";
import TextSearch from "../components/textSearch";
import { ProductsSearch } from "../layouts/productsSearch";

function Pencarian() {
  return (
    <>
      <AppBarComp />
      <TextSearch />
      <Box
        sx={{
          p: 2,
        }}
      >
        <ProductsSearch />
      </Box>
      <Copyright />
    </>
  );
}

export default Pencarian;
