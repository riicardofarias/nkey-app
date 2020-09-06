import React from 'react';
import { connect } from 'react-redux'
import { authActions } from './_actions'

import './styles.css';

const Login = ({ signIn }) => {

    function handleSubmit(e){
        e.preventDefault();

        signIn()
    }

    return <div className="hero-body">
        <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
                <h1 className="title">Login</h1>
                <h2 className="subtitle">Faça login para continuar</h2>

                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <div className="control">
                                <input className="input" name="email" type="email" placeholder="E-mail" required/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input" name="password" type="password" placeholder="Senha" required/>
                            </div>
                        </div>

                        <div className="field mt-5">
                            <div className="control">
                                <button className="button is-success is-fullwidth">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => (
    {}
);

const mapDispatchToProps = dispatch => ({
    signIn: () => dispatch(authActions.signIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);