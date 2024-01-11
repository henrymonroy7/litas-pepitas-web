import React from "react";
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  Box,
} from "@mui/material";
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
      <Grid item xs={12}>
        <Typography gutterBottom>
          <Box fontWeight="fontWeightBold">{name}</Box>
        </Typography>
        <FormControl component="fieldset">
          <FormGroup className={classes.checkboxGroup}>
            {itemList.map((item) => (
              <FormControlLabel
                key={item.id}
                control={
                  <Checkbox onChange={handleCategoryChange} name={item.name} />
                }
                label={item.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};
export default CheckboxList;
