const style = theme => ({
  navigationBar: {
    backgroun0dColor: theme.palette.primary.main
  },
  title: {
    flexGrow: 1
  },
  buttontitle: {
    marginRight: theme.spacing(2)
  },
  hello: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'Center',
    justifyContent: 'Center',
    color: 'black',
    height: '70vh'
  },

  mainFeaturedPostContent: {
    height: '50vh',
    flexDirection: 'column',
    boxShadow: '10px 10px 10px #808080'
  }
});
export default style;
