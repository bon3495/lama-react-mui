import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({
  root: {
    maxWidth: '100%',
  },

  media: {
    height: '0',
    paddingTop: '56.25%', // 16:9
  },

  cartActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  cartContent: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },

  textName: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: theme.spacing(2),
  },

  description: {
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '3',
    overflow: 'hidden',
    display: '-webkit-box',
  },
}));
