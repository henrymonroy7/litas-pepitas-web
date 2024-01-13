import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  // CardActions,
  // Button,
  // IconButton,
  // Grid,
} from "@mui/material";
import * as React from "react";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Item = ({ product }) => {
  return (
    <React.Fragment>
      <Card square={false}>
        <CardMedia
          component={"img"}
          alt="image-name"
          image={product.images !== null ? product.images[0] : ""}
          onClick={() => console.log("On click in card")}
        ></CardMedia>
        <CardContent>
          <Typography
            variant="inherit"
            color={"text.secondary"}
            sx={{
              fontSize: "1.0rem",
            }}
          >
            {product.name}
          </Typography>
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
        {/* <CardActions sx={{ justifyContent: "end" }}>
          <IconButton size="large" color="primary">
            <AddShoppingCartIcon fontSize="inherit" />
          </IconButton>
        </CardActions> */}
      </Card>
    </React.Fragment>
  );
};

export default Item;
