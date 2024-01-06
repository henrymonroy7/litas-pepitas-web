import React from "react";
import { Grid, Typography } from "@mui/material";
import PriceRangeSlider from "./PriceRangeSlider";
import CheckboxList from "./CheckboxList";

const categories = [
  {
    id: 1,
    name: "Collares",
  },
  {
    id: 2,
    name: "Pulseras",
  },
  {
    id: 3,
    name: "Accesorios",
  },
  {
    id: 4,
    name: "Shokers",
  },
  {
    id: 5,
    name: "Pulseras de anillo",
  },
  {
    id: 6,
    name: "Aretes",
  },
];

const FilterContainer = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Grid container spacing={2}>
        <PriceRangeSlider />
        <CheckboxList name={"Categorías"} optionsList={categories} />
      </Grid>
    </React.Fragment>
  );
};

export default FilterContainer;
