import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FooterLink = (props) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mb: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1,
        }}
      >
        {props.title}
      </Typography>
      {props.daftarLink.map((item) => (
        <Typography
          onClick={() => {
            if (item === "Semua Product") {
              navigate("/products");
            } else if (item === "Kemitraan") {
              window.open("https://mitra.duniakeramik.com");
            }
          }}
          variant="body1"
          sx={{ color: "#fff", mr: 3, textDecoration: "none", mb: 1 }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default FooterLink;
