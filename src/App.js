import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import Routes from './Routes';
import { Provider as AuthProvider } from './auth/AuthContext';
import './App.css';
import * as operations from './redux/operations';

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
                <Routes />
            </AuthProvider>
        </div>
    );
}

export default connect(null, {
    loadCountries: operations.loadCountries,
})(App);
