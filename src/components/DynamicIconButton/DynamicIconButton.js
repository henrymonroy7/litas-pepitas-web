import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";

const DynamicIconButton = ({
  defaultIcon,
  hoverIcon,
  altText,
  colorIcon = "default",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <React.Fragment>
      <Tooltip title={altText} placement="bottom-start">
        <IconButton
          color={isHovered ? colorIcon : "default"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isHovered ? hoverIcon : defaultIcon}
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
};
export default DynamicIconButton;
