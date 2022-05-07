import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from '@mui/icons-material/Google';

const SocialButton = () => {
    return(
        <Box>
            <IconButton onClick={() => {
              window.open("https://www.instagram.com/tokoduniakeramik")
            }}>
              <InstagramIcon
                sx={{
                  color: "secondary.main",
                  mr: 1,
                }}
              />
            </IconButton>
            <IconButton onClick={() => {
              window.open("https://www.facebook.com/tokoduniakeramik")
            }}>
              <FacebookIcon
                sx={{
                  color: "secondary.main",
                  mr: 1,
                }}
              />
            </IconButton>
            <IconButton onClick={() => {
              window.open('https://www.google.com/search?q=dunia+keramik&sxsrf=APq-WBskbN16UWDdEJSb5z976-6IVCFa2g%3A1650722677151&ei=dQdkYvzzCJyH4-EP_qqlsAI&oq=dunia+&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzILCAAQgAQQsQMQgwEyDAgAELEDEIMBEAoQQzILCAAQgAQQsQMQgwEyBwgAELEDEEMyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIECAAQQzILCAAQgAQQsQMQgwEyBQgAEIAEOgcIABBHELADOgoIABBHELADEMkDOggIABCSAxCwAzoKCC4QxwEQrwEQJzoKCAAQsQMQgwEQQzoECC4QQzoLCC4QgAQQxwEQrwE6BwguENQCEEM6CgguELEDENQCEEM6CgguEMcBENEDEEM6CgguEMcBEKMCEENKBAhBGABKBAhGGABQoAxYnxNgkh9oAXABeACAAVyIAY8EkgEBNpgBAKABAcgBCcABAQ&sclient=gws-wiz')
            }}>
              <GoogleIcon
                sx={{
                  color: "secondary.main",
                  mr: 1,
                }}
              />
            </IconButton>
          </Box>
    )
}

export default SocialButton;