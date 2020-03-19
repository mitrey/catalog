import React from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../../auth/useAuth';

const Navbar = ({ location }) => {
    const { isLoggedIn, login, logout, user, loginInProgress } = useAuth();

    return (
        <div className="navBar">
            {loginInProgress ? (
                'Loading'
            ) : (
                <div className="auth">
                    {isLoggedIn && (
                        <>
                            <span className="auth__user">{user.name}</span>
                            <span
                                className="auth__link"
                                onClick={() => logout()}
                            >
                                Logout
                            </span>
                        </>
                    )}
                    {!isLoggedIn && (
                        <span className="auth__link" onClick={() => login()}>
                            Sign In to ask
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default withRouter(Navbar);
