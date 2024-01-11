import * as React from "react";
import Item from "./Item";
import { Grid, Paper } from "@mui/material";

const ItemList = ({ products }) => {
  return (
    <React.Fragment>
      <Paper>
        {products.map((prod) => (
          <Item key={prod.id} />
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default ItemList;
