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
    }

    if (currentUserId) return <Redirect to="/" />
    const filled = email.length > 4 && email.length < 70 && password.length > 4 && password.length < 70;

    return (
        <>
            <div className="login-header">
                <h1>Log in</h1>
                <h3>Not registered with us yet? <a href="/signup">Sign up</a></h3>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>
                    Email address:
            <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Password:
            <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <Button type="submit" className={`${filled ? 'clickable' : ''}`} disabled={!filled}>Log in</Button>
            </form>
            <div className="login-footer">

            </div>
        </>
    )
}


export default LoginPage
