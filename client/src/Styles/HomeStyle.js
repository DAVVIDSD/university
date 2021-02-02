import { makeStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    textDecoration:'none',
    color:'#e8e5d7'
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    background: '#e8e5d7'
  },
  header: {
    display: "flex",
    padding: "30px",
    height: "500px",
    width: "100%",
    background: "#fbc404",
    color: "black",
  },
  cardHeader: {
    backgroundColor:'#fbc404'
  },
  img: {
    width: "650px",
    marginLeft: "50px",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  h1: {
    fontSize: "40px",
  },
  p :{
    fontWeight: 'bold'
  },
  button: {
    height: '60px',
    width: '300px',
    marginTop: '50px',
    outline: 'none',
    border: 'none',
    borderRadius: '20px',
    background: 'black',
    color: '#fbc404',
    fontWeight: 'bold',
    fontSize: '15px',
    cursor:'pointer'
  },
  body: {
    background:'black'
  },
}));

export default HomeStyles;