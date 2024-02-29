import React from "react";
import {
  Typography,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const formatPrice = (value, isValueLabelDisplay) => {
  return isValueLabelDisplay
    ? `$${value.toLocaleString("es-CO")}`
    : `$${value / 1000}`;
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
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            id="price-slider"
            variant="subtitle1"
            fontWeight="fontWeightBold"
          >
            Precio
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            size="small"
            step={step}
            min={min}
            max={max}
            marks={marks}
            value={priceValue}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => (
              <div>{`${formatPrice(value, true)}`}</div>
            )}
            aria-labelledby="price-slider"
          />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};

export default PriceRangeSlider;
