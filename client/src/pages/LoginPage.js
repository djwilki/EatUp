import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.auth.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
        window.location.href = "/"
    }

    if (currentUserId) return <Redirect to="/" />
    const filled = email.length > 4 && email.length < 70 && password.length > 4 && password.length < 70;

    return (
        <>
            <div className="banner">
                <img src="meetup_logo.png" />
                <div className="links">
                    <a href="/login">Log in</a>
                    <a href="/register">Sign up</a>
                </div>
            </div>

            <div className="page">


                <div className="login-header">
                    <div className="title">Log in</div>
                    <div className="sign-up">Not registered with us yet? <a href="/register">Sign up</a></div>
                </div>
                <div className="login-form-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label>
                            Email address:</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>
                            Password:</label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button type="submit" className={`${filled ? 'clickable' : ''}`} disabled={!filled}>Log in</Button>
                    </form>
                </div>
                <div className="login-footer">
                    <div className="OR">OR</div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="hidden"
                            name="email"
                            value='demo@example.com'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="hidden"
                            name="password"
                            value="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="demo-user">Log in with Demo User</button>
                    </form>
                </div>
            </div>
            <div className="page-footer">
                <div className="footer-pages">
                    <a href="/login">Log in</a>
                </div>
                <div className="footer-links">
                    <a>Help</a>
                    <a>About Us</a>
                    <a>Jobs</a>
                </div>
                <div>Privacy</div>
            </div>
        </>
    )
}


export default LoginPage
