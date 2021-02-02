import React from "react";

import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { LOGOUT } from "../config/router/path";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Logo from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    width: "90%",
    margin: "auto",
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "black",
    color: "#e8e5d7",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    width: "100px",
    height: "100px",
  },
  imgContainer: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
    color: '#e8e5d7',
    fontWeight: 'bold'
  },
  navButton: {
    background: '#fbc404',
    width: '150px',
    height: '40px',
    outline:'none',
    border: 'none',
    borderRadius: '20px',
    marginLeft: '15px'
    
  }
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.imgContainer}>
          <img className={classes.toolbarTitle} src={Logo} alt="" srcset="" />
        </div>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            href="#"
            className={classes.link}
          >
            Support
          </Link>
        </nav>
        <button
          className={classes.navButton}
          variant="outlined"
          // className={classes.link}
        >
          <Link className={classes.link} style={{color:'black'}} to={LOGOUT}>Cerrar Sesion</Link>
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
