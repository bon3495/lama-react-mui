import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AddOutlined, RemoveOutlined } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';

const CartItem = props => {
  const { item, onUpdateCartQuantity, onRemoveCartQuantity } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        image={item.image.url}
        title={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" className={classes.cardName}>
          {item.name}
        </Typography>
        <Typography variant="h6" className={classes.cardPrice}>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <IconButton
            onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            <RemoveOutlined />
          </IconButton>
          <Typography align="center" className={classes.cardQuantity}>
            {item.quantity}
          </Typography>
          <IconButton
            onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}
          >
            <AddOutlined />
          </IconButton>
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="button"
          onClick={() => onRemoveCartQuantity(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
