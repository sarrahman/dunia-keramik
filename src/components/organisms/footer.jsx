import { Box, Typography } from "@mui/material";
import FooterLink from "../molecules/footerLink";
import SocialButton from "../molecules/socialButton";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#222",
        flexDirection: { xs: "column", md: "row" },
        color: "#fff",
        pt: 5,
        pb: 6,
        p: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6">Dunia Keramik</Typography>
        <SocialButton />
      </Box>
      <FooterLink
        title="Navigasi"
        daftarLink={[
          "Semua Product",
          "Pencarian",
          "kemitraan",
          "kalkulator",
        ]}
      />
      <FooterLink
        title="Suport"
        daftarLink={[
          "Feedback",
          "Contact Us",
          "Costumer Service",
          "Term & Conditions",
        ]}
      />
    </Box>
  );
};

export default Footer;