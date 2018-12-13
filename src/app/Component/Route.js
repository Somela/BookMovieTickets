import React, { Component } from 'react'
import {  Route } from 'react-router-dom';
import Header from './header';
import Home from './home';

class Routes extends Component {
    render() {
        return (
            <div>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/home" component={Home} /> */}
            {/* <Route path="/home/inbox" component={Inbox} />   */}
            </div>
        )
    }
}

export default Routes;