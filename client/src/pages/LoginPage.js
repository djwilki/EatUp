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
            <div className="login-header">
                <div>Log in</div>
                <div>Not registered with us yet? <a href="/signup">Sign up</a></div>
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
        </>
    )
}


export default LoginPage
