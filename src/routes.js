import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Main from './pages/main'
import Auth from './pages/auth'

const isAuthenticated = localStorage.getItem('token')

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if(isAuthenticated) 
            return <Component {...props}/>

        return <Redirect to={{ pathname: '/login', state: { from: props.location }}}/>
    }}/>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={ Main }/>
            <Route path="/login" component={ Auth }/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
