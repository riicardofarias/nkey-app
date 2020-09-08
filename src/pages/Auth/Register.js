import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as userActions from '../../store/users/actions';

const Register = ({ registerUser, isLoading, isSuccess }) => {
    const history = useHistory();
    const [ user, setUser ] = useState({
        email: '',
        name: '',
        password: ''
    });

    useEffect(() => {
        if(isSuccess) 
            history.push('/')
    }, [history, isSuccess])

    const handleSubmit = (e) => {
        e.preventDefault();

        registerUser(user);
    }

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h1 className="title">Registrar</h1>
                    <h2 className="subtitle">Registro de conta de usuário</h2>

                    <div className="box">
                        <form onSubmit={ handleSubmit }>
                            <div className="field">
                                <div className="control">
                                    <input className="input" name="name" value={ user.name } onChange={ handleOnChange } type="text" placeholder="Nome" required/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input" name="email" value={ user.email } onChange={ handleOnChange } type="email" placeholder="E-mail" required/>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input className="input" name="password" value={ user.password } onChange={ handleOnChange } type="password" placeholder="Senha" required/>
                                </div>
                            </div>

                            <div className="field mt-5">
                                <div className="control">
                                    <button type="submit" className={`button is-success is-fullwidth ${ isLoading ? 'is-loading' : '' }`}>Criar conta</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
    isSuccess: state.user.isSuccess
});

const mapDispatchToProps = dispatch => ({
    registerUser: (user) => dispatch(userActions.register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);