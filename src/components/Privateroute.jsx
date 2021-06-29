import React, { useContext } from 'react';
import { AuthContext } from '../store';
import { Redirect, Route } from 'react-router-dom';

    const PrivateRoute = ({component: Component, ...rest}) => {
        const store = useContext(AuthContext);
        return (store.isAuth)
        ? <Route {...rest} component={Component} />
        : <Redirect to="/" />
    };

export default PrivateRoute;
