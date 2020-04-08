import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

const RestrictedRoute = props => {
    const { isAdmin } = useAuth();

    if (!isAdmin) return <Redirect to="/" />;

    return <Route {...props} />;
};

export default RestrictedRoute;
