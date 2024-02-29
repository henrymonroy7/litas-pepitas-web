import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import FilterContainer from "./FilterContainer";
import CloseIcon from "@mui/icons-material/Close";

const DrawerContainer = () => {
  const title = "Filtrar";
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    console.log(open);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Filtrar
      </Button>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <Box role="presentation" sx={{ width: 300 }}>
          <Grid container justifyContent={"space-between"} p={1}>
            <Grid item alignSelf={"center"} textAlign={"left"}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
            </Grid>
            <Grid
              item
              justifyContent={"space-between"}
              alignSelf={"self-start"}
              textAlign={"right"}
            >
              <Link
                component="button"
                variant="button"
                sx={{ fontSize: "60%" }}
                onClick={() => {
                  console.info("borrar filtros");
                }}
              >
                Borrar filtros
              </Link>
              <IconButton
                size="small"
                aria-label="close"
                onClick={toggleDrawer(false)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
          <FilterContainer />
          <Grid m={1}>
            <Divider />
            <Button
              variant="contained"
              sx={{ marginTop: 2 }}
              size="medium"
              onClick={toggleDrawer(false)}
            >
              Aplicar
            </Button>
          </Grid>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerContainer;
