import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage'
import SignUpPage from './SignUpPage';

export default function Pages() {
    return (
        <>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/register" component={SignUpPage}/>
        </>
    )
}
