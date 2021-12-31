import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const Product = props => {
  const classes = useStyles();
  const { onAddToCart, product } = props;
  const { name, description, price, image, id } = product;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image.url} title={name} />
      <CardContent>
        <div className={classes.cartContent}>
          <Typography variant="h5" className={classes.textName}>
            {name}
          </Typography>
          <Typography variant="h5">{price.formatted_with_symbol}</Typography>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: description }}
          className={classes.description}
        />
      </CardContent>
      <CardActions className={classes.cartActions}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
