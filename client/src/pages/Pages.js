import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
// import HomePage from './HomePage';
import ConnectedHomePage from './ConnectedHomePage'
import SignUpPage from './SignUpPage';
import ConnectedEventPage from './ConnectedEventPage'
import MakeEventPage from './MakeEventPage'
import ConnectedEditEventPage from './EditEventPage'

export default function Pages() {
    return (
        <>
            <Route exact path="/" component={ConnectedHomePage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route path="/register" component={SignUpPage}/>
            <Route exact path="/events" component={MakeEventPage}/>
            <Route path="/event/:id/edit" component={ConnectedEditEventPage}></Route>
            <Route path="/events/:id" component={ConnectedEventPage}/>

        </>
    )
}
