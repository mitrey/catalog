import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Router from './Router';
import { Provider as AuthProvider } from './auth/AuthContext';
import './App.css';
import * as operations from './modules/Home/redux/operations';

function App({ loadCountries }) {
    useEffect(() => {
        loadCountries();
    }, [loadCountries]);

    return (
        <div className="app">
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Baloo+2&family=Montserrat:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </div>
    );
}

export default connect(null, {
    loadCountries: operations.loadCountries,
})(App);
