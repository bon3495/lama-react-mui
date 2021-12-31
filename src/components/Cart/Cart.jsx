import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CartItem from './CartItem/CartItem';
import EmptyCart from './EmptyCart';
import useStyles from './styles';

const Cart = props => {
  const classes = useStyles();
  const { cart, handleUpdateCartQuantity, handleRemoveCart, handleEmptyCart } =
    props;

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map(item => (
            <Grid item key={item.id} xs={12} sm={6} lg={3}>
              <CartItem
                item={item}
                onUpdateCartQuantity={handleUpdateCartQuantity}
                onRemoveCartQuantity={handleRemoveCart}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h5">
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              variant="contained"
              type="button"
              color="secondary"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              size="large"
              variant="contained"
              type="button"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </>
    );
  };

  if (!cart.line_items) return <p>Loading...</p>;

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" align="center">
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
