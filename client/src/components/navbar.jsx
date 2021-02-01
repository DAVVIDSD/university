import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {LOGOUT} from '../config/router/path';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));
const Navbar = () => {
  const classes = useStyles()
  return (
     <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            <Link to={LOGOUT}>
              Cerrar Sesion
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
 
  )
}

export default Navbar;
