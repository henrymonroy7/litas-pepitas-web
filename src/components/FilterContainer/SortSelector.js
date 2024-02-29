import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { SORTING_OPTIONS } from "../../services/data";

const SortSelector = () => {
  const optionsList = SORTING_OPTIONS;

  const [selected, setSelected] = React.useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <React.Fragment>
      <FormControl
        variant="outlined"
        size="small"
        sx={{
          minWidth: "100%",
        }}
      >
        <InputLabel id="sort-select-label-id">Ordenar</InputLabel>
        <Select value={selected} onChange={handleChange} label="Ordenar">
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          {optionsList.map((opt) => (
            <MenuItem key={opt.id} value={opt.name}>
              {opt.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
export default SortSelector;
