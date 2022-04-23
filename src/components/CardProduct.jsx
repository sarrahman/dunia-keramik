import { Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { fCurrency } from "../utils/formatNumber";
import Label from "./Label";
import { useNavigate } from "react-router-dom";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  position: "absolute",
});

export default function CardProduct(props) {
  const data = props.data;

  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/product/${data._id}`)}>
      <Box sx={{ pt: "100%", position: "relative", cursor: "pointer" }}>
        {data.isPromo && (
          <Label
            variant="filled"
            color={(data.isPromo === "promo" && "primary") || "secondary"}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: "absolute",
              textTransform: "uppercase",
            }}
          >
            Promo
          </Label>
        )}
        <ProductImgStyle alt={data.name} src={data.image} />
      </Box>

      <Stack sx={{ p: 1 }}>
        <Typography variant="h6" sx={{ cursor: "pointer" }} noWrap>
          {data.name}
        </Typography>
        <Typography variant="subtitle1" color="secondary" noWrap>
           {data.kategori}
        </Typography>
        <Typography color="primary" variant="subtitle1" noWrap>
            Rp {fCurrency(data.price)}
          </Typography>
      </Stack>
    </Card>
  );
}
