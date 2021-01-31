import './App.css';
import {Switch} from 'react-router-dom';
// Components
import SignIn from './components/SignIn.jsx';
import Home from './components/Home.jsx'
import Logout from './components/Logout';
// Provate and Public Routes
import PrivateRoute from './components/router/PrivateRoute';
import PublicRoute from './components/router/PublicRoute';
import {LOGIN, PRIVATE, LOGOUT} from './config/router/path';
// Login Contexts
import AuthProvider from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
        <Switch>
          <PublicRoute exact path={LOGIN} render={() => <SignIn />} />
          <PrivateRoute path={PRIVATE} render={() => <Home />} />
          <PrivateRoute path={LOGOUT} render={() => <Logout />} />
        </Switch>
    </AuthProvider>
  );
}

export default App;
