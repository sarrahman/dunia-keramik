import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

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
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <a
            href="https://www.instagram.com/tokoduniakeramik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "primary.main" }}>
              <InstagramIcon
                sx={{
                  color: "secondary.main",
                  mr: 1,
                }}
              />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/tokoduniakeramik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "primary.main" }}>
              <FacebookIcon
                sx={{
                  color: "secondary.main",
                  mr: 1,
                }}
              />
            </IconButton>
          </a>
          <a
            href="https://www.google.com/search?q=dunia+keramik&sxsrf=APq-WBskbN16UWDdEJSb5z976-6IVCFa2g%3A1650722677151&ei=dQdkYvzzCJyH4-EP_qqlsAI&oq=dunia+&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzILCAAQgAQQsQMQgwEyDAgAELEDEIMBEAoQQzILCAAQgAQQsQMQgwEyBwgAELEDEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIECAAQQzILCAAQgAQQsQMQgwEyBQgAEIAEOgcIABBHELADOgoIABBHELADEMkDOggIABCSAxCwAzoKCC4QxwEQrwEQJzoKCAAQsQMQgwEQQzoECC4QQzoLCC4QgAQQxwEQrwE6BwguENQCEEM6CgguELEDENQCEEM6CgguEMcBENEDEEM6CgguEMcBEKMCEENKBAhBGABKBAhGGABQoAxYnxNgkh9oAXABeACAAVyIAY8EkgEBNpgBAKABAcgBCcABAQ&sclient=gws-wiz "
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton sx={{ color: "primary.main" }}>
              <GoogleIcon
                sx={{
                  color: "secondary.main",
                  mr: 1,
                }}
              />
            </IconButton>
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            Dunia Keramik © Copyright {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Copyright;
