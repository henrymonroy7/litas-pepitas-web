import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Link,
} from "@mui/material";
import * as React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DynamicIconButton from "../DynamicIconButton/DynamicIconButton";

const Item = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <React.Fragment>
      <Card
        square={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component={"img"}
          alt="image-name"
          image={product.images !== null ? product.images[0] : ""}
        ></CardMedia>
        <CardContent>
          <Link
            component="button"
            variant="overline"
            color={"inherit"}
            sx={{ fontSize: "1.0rem" }}
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            {product.name}
          </Link>

          <Typography
            variant="inherit"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "fontWeightBold",
            }}
          >
            ${product.price.toLocaleString("es-CO")} COP
          </Typography>
        </CardContent>
        <CardActions>
          <DynamicIconButton
            defaultIcon={<ShoppingCartIcon />}
            hoverIcon={<AddShoppingCartIcon />}
            colorIcon="secondary"
            altText="Agregar al carrito"
          />
          <DynamicIconButton
            defaultIcon={<FavoriteBorderIcon />}
            hoverIcon={<FavoriteIcon />}
            colorIcon="secondary"
            altText="Añadir a favoritos"
          />
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Item;
