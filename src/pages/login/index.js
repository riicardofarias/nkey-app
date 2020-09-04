import React from 'react';
import './styles.css';

const Login = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return <div className="hero-body">
        <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
                <h1 className="title">Login</h1>
                <h2 className="subtitle">Faça login para continuar</h2>

                <div className="box">
                    <form onSubmit={onSubmitHandler}>
                        <div className="field">
                            <div className="control">
                                <input className="input" type="email" placeholder="E-mail" required/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <input className="input" type="password" placeholder="Senha" required/>
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

export default Login;