import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MainAppBar = (props) => {
  const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window,
    });

    return (
      <Slide direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Store
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
};

export default MainAppBar;
