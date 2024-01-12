import * as React from "react";
import { Grid, Typography } from "@mui/material";
import FilterContainer from "../FilterContainer/FilterContainer";
import ItemList from "./ItemList";
import { PRODUCTS } from "../../services/data";

const ItemListContainer = () => {
  const products = PRODUCTS;

  return (
    <Grid
      border={1}
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
        sm={2}
        md={2}
      >
        <FilterContainer />
      </Grid>

      <Grid item xs={3} sm={6} md={10} border={3} borderColor={"green"}>
        <Typography>Item list container</Typography>
        <ItemList products={products} />
      </Grid>
    </Grid>
  );
};

export default ItemListContainer;
