import React, { createContext, useEffect, useState } from 'react';
import firebase from '../firebase';

const AuthContext = createContext({});

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(data => {
            if (data) {
                setUser({ email: data.email, name: data.displayName });
            } else {
                setUser(null);
            }
        });
    }, []);

    const login = () => {
        setLoading(true);
        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                return firebase
                    .auth()
                    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
                    .then(res => {
                        setLoading(false);
                    })
                    .catch(e => setLoading(false));
            })
            .catch(e => {
                console.log('e', e);
            });
    };
    const logout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => setUser(null));
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!user,
                login,
                logout,
                user,
                loginInProgress: loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { Provider };

export default AuthContext;
