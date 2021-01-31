import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {LOGIN} from '../../config/router/path';
import useAuthContext from '../../hooks/useAuthContext';

const PrivateRoute = (props) => {

  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Redirect to={LOGIN} />
  }
  return <Route {...props} />
}

export default PrivateRoute;
