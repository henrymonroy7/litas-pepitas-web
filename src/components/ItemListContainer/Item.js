import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import * as React from "react";

const Item = () => {
  return (
    <React.Fragment>
      <Card square={false}>
        <CardMedia
          component={"img"}
          alt="image-name"
          image="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlzdXRlcmlhfGVufDB8MHwwfHx8Mg%3D%3D"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Add to cart</Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Item;
