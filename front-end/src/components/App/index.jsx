import React from 'react'
import { BrowserRouter, withRouter, Switch, Route } from 'react-router-dom'

import { Home, Register, Login, PrivateRoute } from '..'


import '../../styles/index.css'

import UserProfile from '../../pages/Profile/UserProfile';


const App = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={Register} />
            <Route exact path="/profile" component={UserProfile}/>

        </Switch>
    </BrowserRouter>
)

export default withRouter(App)