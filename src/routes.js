import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Events from './pages/events'
import Auth from './pages/auth'

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
            <PrivateRoute exact auth={auth} path="/" component={ Events }/>
            <PublicRoute path="/login" component={ Auth }/>
        </Switch>
    </BrowserRouter>
)

export default connect((state) => ({ auth: state.auth }))(Routes);
