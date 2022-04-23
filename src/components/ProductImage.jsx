import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function ProductImage(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "2px 2px 10px #999",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt={props.name}
        />
      </CardActionArea>
    </Card>
  );
}
