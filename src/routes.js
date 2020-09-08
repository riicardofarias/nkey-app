import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import EventsPage from './pages/Events/AllEvents';
import AddEventPage from './pages/Events/AddEvent';
import EditEventPage from './pages/Events/EditEvent';

import AuthPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';

import PublicLayout from './components/Layout/PublicLayout'
import PrivateLayout from './components/Layout/PrivateLayout'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const { auth: { isLoggedIn } } = rest

        if(isLoggedIn) {
            return (
                <PrivateLayout>
                    <Component {...props}/>
                </PrivateLayout>
            )
        }

        return <Redirect to={{ pathname: '/login', state: { from: props.location }}}/>
    }}/>
)

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        return (
            <PublicLayout>
                <Component {...props}/>
            </PublicLayout>
        )
    }}/>
)


const Routes = ({ auth }) => (
    <BrowserRouter>
        <Switch>
            # Events
            <PrivateRoute exact auth={auth} path="/" component={ EventsPage }/>
            <PrivateRoute auth={auth} path="/add" component={ AddEventPage }/>
            <PrivateRoute auth={auth} path="/edit/:id" component={ EditEventPage }/>
            
            # Login
            <PublicRoute path="/login" component={ AuthPage }/>

            # Register user
            <PublicRoute path="/register" component={ RegisterPage }/>
        </Switch>
    </BrowserRouter>
)

export default connect((state) => ({ auth: state.auth }))(Routes);
