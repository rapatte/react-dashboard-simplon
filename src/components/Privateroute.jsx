import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { AuthContext } from '../store';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser && location.pathname !== "/") {
        navigate("/");
        return null;
    }
    return <Component {...rest} />;
};

export default PrivateRoute;
