import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import * as React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DynamicIconButton from "../DynamicIconButton/DynamicIconButton";

const Item = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [stockInfo, setStockInfo] = React.useState({});

  React.useEffect(() => {
    const { stock } = product;
    const newStockInfo = {};
    const styles = {};

    styles.marginRight = 1;
    styles.fontWeight = "bold";
    styles.textAlign = "right";
    if (stock <= 0) {
      newStockInfo.title = "¡Stock agotado!";
      styles.color = "gray";
      styles.textDecoration = "line-through";
    } else if (stock > 0 && stock <= 10) {
      const title = stock === 1 ? "Último en stock" : "Últimas unidades";
      newStockInfo.title = `¡${title}!`;
      styles.color = stock === 1 ? "red" : "red";
    } else {
      newStockInfo.title = "¡Stock disponible!";
      styles.color = "green";
    }
    newStockInfo.styles = styles;

    setStockInfo(newStockInfo);
  }, [product]);

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
          transform: isHovered ? "scale(1.01)" : "scale(1)",
          transition: "transform 0.3s ease-in-out",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component={"img"}
          alt="image-name"
          image={product.images !== null ? product.images[0] : ""}
        ></CardMedia>

        <Typography
          sx={{
            ...stockInfo.styles,
          }}
        >
          {stockInfo.title}
        </Typography>

        <CardContent>
          <Typography variant="overline" color={"inherit"}>
            {product.name}
          </Typography>

          <Typography
            variant="inherit"
            color={"primary"}
            sx={{
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
