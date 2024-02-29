import * as React from "react";
import { Grid, Typography } from "@mui/material";
import ItemList from "./ItemList";
import SortSelector from "../FilterContainer/SortSelector";
import { PRODUCTS } from "../../services/products";
import DrawerContainer from "../FilterContainer/DrawerContainer";

const ItemListContainer = () => {
  const products = PRODUCTS;

  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent={"space-between"}
        // sx={{ border: 1, borderColor: "blue" }}
      >
        <Grid
          item
          xs={4}
          sm={8}
          md={8}
          alignSelf={"center"}
          // sx={{ border: 1 }}
        >
          <Typography variant="h6">hola</Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={3}
          alignSelf={"center"}
          // textAlign={"justify"}
          p={1}
          // sx={{ border: 2, borderColor: "red" }}
        >
          <SortSelector />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={1}
          alignSelf={"center"}
          p={1}
          // sx={{ border: 2, borderColor: "green" }}
        >
          <DrawerContainer />
        </Grid>
        <Grid
          item
          xs={4}
          sm={8}
          md={12}
          p={1}
          // sx={{ border: 1, borderColor: "purple" }}
        >
          <ItemList products={products} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ItemListContainer;
