import { Box, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Box align="center" className={classes.emptyCart}>
      <Typography variant="subtitle1" className={classes.emptyText}>
        You have no items in your shopping cart.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/"
      >
        Start adding some!
      </Button>
    </Box>
  );
};

export default EmptyCart;
