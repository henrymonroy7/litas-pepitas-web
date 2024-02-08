import React from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import PriceRangeSlider from "./PriceRangeSlider";
import CheckboxList from "./CheckboxList";
import { CATEGORIES, COLORS, SUPPLIES } from "../../services/data";

const FilterContainer = () => {
  const title = "Filtrar";
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
      <Grid container>
        <Grid
          container
          justifyContent={"space-between"}
          columns={{ xs: 12, md: 12 }}
        >
          <Grid item xs={12} md={5} alignSelf={"start"}>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            alignSelf={"center"}
            textAlign={{ sx: "left", md: "right" }}
          >
            <Link
              component="button"
              variant="button"
              sx={{ fontSize: "60%" }}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Quitar filtros
            </Link>
          </Grid>
        </Grid>
        <Grid>
          <PriceRangeSlider
            min={priceRangeValues.min}
            max={priceRangeValues.max}
            step={priceRangeValues.step}
          />
          <CheckboxList name={"Categorías"} itemList={categories} />
          <CheckboxList name={"Materiales"} itemList={supplies} />
          <CheckboxList name={"Colores"} itemList={colors} />
        </Grid>
        <Button variant="contained">Aplicar</Button>
      </Grid>
    </React.Fragment>
  );
};

export default FilterContainer;
