import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../store/auth/actions';

const Navbar = ({ isLoggedIn, logout }) => {
    const history = useHistory()

    useEffect(() => {
        if(!isLoggedIn) {
            history.push('/login');
        }
    }, [history, isLoggedIn])

    return (
        <nav className="navbar is-success" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    Nkey
                </a>
            </div>

            <div className="navbar-end">
                <Link to="/" className="navbar-item" onClick={ () => logout() } >
                    Sair
                </Link>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(authActions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);