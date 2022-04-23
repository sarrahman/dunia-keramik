import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright(props) {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      width: "95%",
      color: "#fff",
      p: { xs: 2, md: 4 },
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        mb: 3,
      }}>
        <IconButton sx={{ color: "primary.main" }}>
          <InstagramIcon
            sx={{
              color: "secondary.main",
              mr: 1,
            }}
          />
        </IconButton>
        <a href="https://www.facebook.com/Dunia-keramik-106701975357962" target="_blank" rel="noopener noreferrer">
        <IconButton sx={{ color: "primary.main" }}>
          <FacebookIcon
            sx={{
              color: "secondary.main",
              mr: 1,
            }}
          />
        </IconButton>
        </a>
        <IconButton sx={{ color: "primary.main" }}>
          <TwitterIcon
            sx={{
              color: "secondary.main",
              mr: 1,
            }}
          />
        </IconButton>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Typography variant="body2" color="text.secondary" align="center">
          Powered By Dunia Keramik | Copyright © {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  </Box>
  );
}

export default Copyright;
