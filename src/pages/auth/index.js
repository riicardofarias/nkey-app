import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as authActions from './_actions';
import { useHistory } from 'react-router-dom';

const Login = ({ auth, signIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn(email, password)
    }

    useEffect(() => {
        if (auth.isLoggedIn) {
            history.push('/')
        }
    }, [ auth.isLoggedIn ])

    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h1 className="title">Login</h1>
                    <h2 className="subtitle">Faça login para continuar</h2>

                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <div className="control">
                                    <input className="input" name="email" value={ email } onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" required/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input" name="password" value={ password } onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" required/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <div className="control">
                                    <button className={`button is-success is-fullwidth ${auth.isLoading ? 'is-loading' : ''}`}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    signIn: (email, password) => dispatch(authActions.signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);