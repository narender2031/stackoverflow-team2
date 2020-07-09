import React from 'react'
import { BrowserRouter, withRouter, Switch, Route } from 'react-router-dom'

import { Home, Register, Login, PrivateRoute } from '..'



import '../../styles/index.css'

import UserProfile from '../../pages/Profile/UserProfile';
import UploadPost from '../../pages/UploadPost/UploadPost';

const App = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={Register} />
            <PrivateRoute exact path="/profile" component={UserProfile}/>
            <PrivateRoute exact path="/upload-post" component={UploadPost}/> 
        </Switch>
    </BrowserRouter>
)

export default withRouter(App)