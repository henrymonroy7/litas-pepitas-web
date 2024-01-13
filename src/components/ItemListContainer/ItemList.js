import * as React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";

const ItemList = ({ products }) => {
  return (
    <React.Fragment>
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={1}
        rowSpacing={1}
      >
        {products.map((prod) => {
          return (
            <Grid key={prod.id} item xs={4} sm={4} md={4}>
              <Item product={prod} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ItemList;
