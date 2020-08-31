import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect } from 'react-router-dom';


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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
            <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password
            <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            <button
                type="submit">

            </button>
        </form>
    )
}


export default LoginPage
