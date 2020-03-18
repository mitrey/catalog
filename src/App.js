import React from 'react';
import Routes from './Routes';
import { Provider as AuthProvider } from './auth/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;
