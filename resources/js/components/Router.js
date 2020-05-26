import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import { AuthDataContext, useAuthDataContext } from './AuthDataProvider.js';

import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Home from '../views/Home/Home';
import Profil from '../views/Profil/Profil';
import Test from '../views/Test/Test';

const PrivateRoute = ({ component, ...options }) => {
    const { authData } = useAuthDataContext();

    const finalComponent = Object.keys(authData).length > 0 ? component : Login;
  
    return <Route {...options} component={finalComponent} />;
  };
  
  const Router = () => (
    <Switch>
        <Redirect exact={true} from="/" to="/accueil"/>
        <PrivateRoute exact={true} path="/accueil" component={Home} />
        <PrivateRoute exact={true} path="/profil" component={Profil} />

        <Route exact={true} path="/connexion" component={Login} />
        <Route exact={true} path='/inscription' component={Register} />
        <Route exact={true} path="/test" component={Test} />

        <Route path="*" component={() => <p>Page Not Found</p>} />
    </Switch>
  );

  export default Router;