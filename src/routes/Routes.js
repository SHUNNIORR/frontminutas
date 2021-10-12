import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/login/LoginPage'
import { AdminPage } from '../pages/adminPage/AdminPage'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/admin" component={AdminPage}/>
            </Switch>
        </BrowserRouter>
    )
}
