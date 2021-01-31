import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {LOGIN, PRIVATE} from '../../config/router/path';
import useAuthContext from '../../hooks/useAuthContext';
const PublicRoute = (props) => {

  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Redirect to={PRIVATE} />
  }
  return <Route {...props} />
}

export default PublicRoute;
