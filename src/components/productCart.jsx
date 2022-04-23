import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { fCurrency } from "../utils/formatNumber";
import { deleteCart, updateCart } from "../utils/cart";

export default function ProductCart(props) {
  const [qty, setQty] = React.useState(0);

  React.useEffect(() => {
    setQty(props.item.quantity);
  }, [props.item.quantity]);

  return (
    <Card sx={{ display: "flex", boxShadow: "2px 2px 10px #999" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Avatar
          sx={{ width: 50, height: 50 }}
          alt={props.item.product.name}
          src={props.item.product.image}
        />
      </Box>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography variant="h6">{props.item.product.name}</Typography>
          <Typography variant="subtitle1" color="#555">
            {props.item.product.brand}
          </Typography>
          <Typography variant="h6">
            Rp. {fCurrency(props.item.quantity * props.item.product.price)}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              P: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <IconButton
                onClick={() => {
                  setQty(qty + 1);
                  updateCart(props.item.product._id, qty + 1);
                }}
              >
                <AddIcon color="secondary" />
              </IconButton>
              <Typography
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                {qty}
              </Typography>
              <IconButton
                onClick={() => {
                  if (qty > 0) {
                    setQty(qty - 1);
                    updateCart(props.item.product._id, qty - 1);
                  }else{
                    deleteCart(props.item.product._id);
                  }
                }}
              >
                <RemoveIcon color="secondary" />
              </IconButton>
            </Box>
            <IconButton
              onClick={() => {
                deleteCart(props.item.product._id);
                window.location.reload();
              }}
            >
              <DeleteIcon color="secondary" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
