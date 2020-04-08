import React, { createContext, useEffect, useState } from 'react';
import firebase from '../firebase';

const AuthContext = createContext({});

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(data => {
            if (data) {
                setUser({
                    email: data.email,
                    name: data.displayName,
                    avatar: data.photoURL,
                });
            } else {
                setUser(null);
            }
            setInitializing(false);
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
                    .then(() => {
                        setLoading(false);
                    })
                    .catch(() => setLoading(false));
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
                isAdmin: user && user.email === 'yarmakdg@gmail.com',
            }}
        >
            {initializing ? null : children}
        </AuthContext.Provider>
    );
};

export { Provider };

export default AuthContext;
