import React from "react";
import { Grid, Typography } from "@mui/material";
import PriceRangeSlider from "./PriceRangeSlider";
import CheckboxList from "./CheckboxList";
import { CATEGORIES, COLORS, SUPPLIES } from "../../services/data";

const FilterContainer = () => {
  const categories = CATEGORIES;
  const supplies = SUPPLIES;
  const colors = COLORS;
  const priceRangeValues = {
    min: 10000,
    max: 300000,
    step: 5000,
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <Grid container spacing={3}>
        <PriceRangeSlider
          min={priceRangeValues.min}
          max={priceRangeValues.max}
          step={priceRangeValues.step}
        />
        <CheckboxList name={"Categorías"} itemList={categories} />
        <CheckboxList name={"Materiales"} itemList={supplies} />
        <CheckboxList name={"Colores"} itemList={colors} />
      </Grid>
    </React.Fragment>
  );
};

export default FilterContainer;
