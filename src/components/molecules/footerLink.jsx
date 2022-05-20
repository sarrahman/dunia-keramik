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
          color: 'secondary.main',
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
            } else if (item === "kemitraan") {
              window.open("https://mitra.duniakeramik.com");
            }else{
              navigate(`/${item}`)
            }
          }}
          variant="body1"
          sx={{ color: "#111", mr: 3, textDecoration: "none", mb: 1, cursor: 'pointer' }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default FooterLink;
