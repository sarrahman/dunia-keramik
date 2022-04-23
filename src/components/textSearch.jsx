import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function TextSearch() {
    return(
        <Box
        sx={{ display: "flex", justifyContent: "center", p: { xs: 2, md: 4 } }}
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="secondary" />
              </InputAdornment>
            ),
          }}
          sx={{ width: "80%" }}
          label="Pencarian..."
          variant="outlined"
        />
      </Box>
    )}