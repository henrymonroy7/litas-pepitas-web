import * as React from "react";
import { Grid, Typography } from "@mui/material";
import FilterContainer from "../FilterContainer/FilterContainer";
import ItemList from "./ItemList";

import SortSelector from "../FilterContainer/SortSelector";
import { PRODUCTS } from "../../services/products";

const ItemListContainer = () => {
  const products = PRODUCTS;

  return (
    <React.Fragment>
      <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid padding={1} item xs={1} sm={2} md={2}>
          <FilterContainer />
        </Grid>

        <Grid item xs={3} sm={6} md={10}>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={8}>
              <Typography variant="h4"></Typography>
            </Grid>
            <Grid item xs={4} sm={8} md={4}>
              <SortSelector />
            </Grid>
          </Grid>
          <Grid item xs={4} sm={8} md={12} padding={1}>
            <ItemList products={products} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemListContainer;
