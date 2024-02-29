import React from "react";
import {
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
  },
});
const CheckboxList = ({ name, itemList }) => {
  const classes = useStyles();

  const handleCategoryChange = (event) => {
    // Implement logic to handle category filter change
    console.log("event", event.target.name);
    console.log(event.target.checked);
  };

  return (
    <React.Fragment>
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle1" fontWeight="fontWeightBold">
            {name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl component="fieldset">
            <FormGroup className={classes.checkboxGroup}>
              {itemList.map((item) => (
                <FormControlLabel
                  key={item.id}
                  control={
                    <Checkbox
                      onChange={handleCategoryChange}
                      name={item.name}
                    />
                  }
                  label={item.name}
                />
              ))}
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
};
export default CheckboxList;
