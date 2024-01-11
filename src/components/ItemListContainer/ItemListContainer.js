import * as React from "react";
import { Grid, Typography } from "@mui/material";
import FilterContainer from "../FilterContainer/FilterContainer";
import ItemList from "./ItemList";
const PRODUCTS = [
  {
    id: 1,
    name: "product name",
  },
  {
    id: 2,
    name: "product name",
  },
  {
    id: 3,
    name: "product name",
  },
  {
    id: 4,
    name: "product name",
  },
  {
    id: 5,
    name: "product name",
  },
];
const ItemListContainer = () => {
  //   const [products, setProducts] = React.useState([]);

  return (
    <Grid
      border={5}
      borderColor={"red"}
      container
      spacing={1}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid
        border={2}
        borderColor={"blue"}
        padding={1}
        item
        xs={1}
        sm={3}
        md={2}
      >
        <FilterContainer />
      </Grid>

      <Grid border={10} borderColor={"green"} item xs={3} sm={5} md={10}>
        <Typography>Item list container</Typography>
        <ItemList products={PRODUCTS} />
      </Grid>
    </Grid>
  );
};

export default ItemListContainer;
