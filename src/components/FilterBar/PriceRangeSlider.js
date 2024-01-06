import React from "react";
import { Typography, Slider, Grid } from "@mui/material";

const featuresPrice = {
  min: 10000,
  max: 300000,
  step: 5000,
};

const formatPrice = (value) => {
  return `$${value.toLocaleString("es-CO")}`;
};

const PriceRangeSlider = () => {
  const [priceValue, setPriceValue] = React.useState([
    featuresPrice.min,
    featuresPrice.max,
  ]);

  const marks = React.useMemo(() => {
    const marksArray = [
      {
        value: featuresPrice.min,
        label: `${formatPrice(featuresPrice.min)}`,
      },
      {
        value: featuresPrice.max / 2,
        label: `${formatPrice(featuresPrice.max / 2)}`,
      },
      {
        value: featuresPrice.max,
        label: `${formatPrice(featuresPrice.max)}`,
      },
    ];

    return marksArray;
  }, []);

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
          step={featuresPrice.step}
          min={featuresPrice.min}
          max={featuresPrice.max}
          marks={marks}
          value={priceValue}
          onChange={handlePriceChange}
          valueLabelDisplay="on"
          valueLabelFormat={(value) => <div>{`${formatPrice(value)}`}</div>}
          aria-labelledby="price-slider"
        />
      </Grid>
    </React.Fragment>
  );
};

export default PriceRangeSlider;
