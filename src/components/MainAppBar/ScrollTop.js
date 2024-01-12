import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Fade } from "@mui/material";

const ScrollTop = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView();
    }
  };

  return (
    <Fade
      direction="down"
      in={trigger}
      onClick={handleClick}
      sx={{ position: "fixed", bottom: 16, right: 16 }}
    >
      {children}
    </Fade>
  );
};

export default ScrollTop;
