import { Grid } from "@mui/material";
import CardProduct from "../components/CardProduct";

export default function ListProduct(props) {
  const data = props.data;

    return(
        <Grid
        container
        spacing={3}
      >
        {data.map((item, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <CardProduct data={item} />
          </Grid>
        ))}
      </Grid>
    )
}