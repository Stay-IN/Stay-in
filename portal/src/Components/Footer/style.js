const style = theme => ({
  footerBar: {
    marginTop: '2rem',
    position: 'relative',
    bottom: 0
    // marginTop:theme.spacing() * 10,
  },
  navigationBar: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(0),
    padding: theme.spacing(1, 0)
  },
  footerTypo: {
    color: 'white',
    fontFamily: 'cursive',
    fontSize: theme.spacing() * 3
  },
  block: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block'
  },
  left: {
    float: 'left!important',
    display: 'block'
  },
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0'
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto'
  }
});
export default style;
