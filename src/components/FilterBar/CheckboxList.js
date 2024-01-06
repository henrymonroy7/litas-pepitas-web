import React from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  checkboxGroup: {
    display: "flex",
    flexDirection: "column",
  },
});
const CheckboxList = ({ name, optionsList }) => {
  const classes = useStyles();

  const handleCategoryChange = (event) => {
    // Implement logic to handle category filter change
    console.log("event", event.target.name);
    console.log(event.target.checked);
  };

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography gutterBottom>{name}</Typography>
        <FormControl component="fieldset">
          <FormGroup className={classes.checkboxGroup}>
            {optionsList.map((option) => (
              <FormControlLabel
                key={option.id}
                control={
                  <Checkbox
                    onChange={handleCategoryChange}
                    name={option.name}
                  />
                }
                label={option.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};
export default CheckboxList;
