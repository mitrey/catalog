import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css';
import useAuth from '../../auth/useAuth';

const Navbar = ({ location }) => {
    const { isLoggedIn, login, logout, user, loginInProgress } = useAuth();

    return (
        <div className="navBar">
            {location.pathname !== '/' && (
                <Link to="/">
                    <div>Back to countries list</div>
                </Link>
            )}

            {loginInProgress ? (
                'Loading'
            ) : (
                <>
                    {isLoggedIn && (
                        <div className="user">
                            <span className="auth__user">{user.name}</span>
                            <button
                                className="auth__button"
                                onClick={() => logout()}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                    {!isLoggedIn && (
                        <button
                            className="auth__button"
                            onClick={() => login()}
                        >
                            Sign In
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default withRouter(Navbar);
