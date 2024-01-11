import React from "react";
import { Typography, Slider, Grid } from "@mui/material";

const formatPrice = (value) => {
  return `$${value.toLocaleString("es-CO")}`;
};

const PriceRangeSlider = ({ min, max, step }) => {
  const [priceValue, setPriceValue] = React.useState([min, max]);

  const marks = React.useMemo(() => {
    const marksArray = [
      {
        value: min,
        label: `${formatPrice(min)}`,
      },
      {
        value: max / 2,
        label: `${formatPrice(max / 2)}`,
      },
      {
        value: max,
        label: `${formatPrice(max)}`,
      },
    ];

    return marksArray;
  }, [min, max]);

  const handlePriceChange = (event, newValue) => {
    // Implement logic to handle price filter change
    setPriceValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography id="price-slider" gutterBottom>
          Precio
        </Typography>
        <Slider
          size="small"
          step={step}
          min={min}
          max={max}
          marks={marks}
          value={priceValue}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => <div>{`${formatPrice(value)}`}</div>}
          aria-labelledby="price-slider"
        />
      </Grid>
    </React.Fragment>
  );
};

export default PriceRangeSlider;
