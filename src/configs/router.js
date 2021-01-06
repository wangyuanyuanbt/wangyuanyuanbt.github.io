
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Login from '../pages/login'
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" component={Login} exact />
            </HashRouter>
        );
    }
}
