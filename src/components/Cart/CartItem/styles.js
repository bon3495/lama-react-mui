import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  media: {
    height: 260,
    backgroundSize: 'contain',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  cardName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '60%',
  },
  cardQuantity: {
    margin: '0 8px',
  },
}));
