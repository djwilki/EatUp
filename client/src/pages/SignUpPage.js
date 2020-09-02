import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signUp } from '../store/auth';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import './SignUpPage.css';
import icon from '../images/meetup_icon.png';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const currentUserId = useSelector(state => state.auth.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(email, password, name));
    }

    const toggleClasses = () => {
        document.getElementById('email-button').classList.toggle("invisible")
        document.getElementById('signup-form').classList.toggle("invisible")
    }

    const handleDemo = (e) => {
        console.log('DEMO')
        e.preventDefault();
        dispatch(login('demo@example.com', 'password'));
        window.location.href = "/"
    }

    if (currentUserId) return <Redirect to="/" />
    return (
        <>
            <div className="banner">
                <img src={icon} alt="icon" id="icon" />
            </div>
            <div id="sign-up-container">
                <h1>Sign up</h1>
                <div className="demo-login">
                    <form className="login-form" onSubmit={handleDemo}>
                        <button type="submit" id="demo-user-button" >Continue with Demo User</button>
                    </form>
                </div>
                <div id="form-container">
                    <button id="email-button" type="submit" onClick={toggleClasses}>Or sign up with email</button>
                    <form id="signup-form" className="invisible" onSubmit={handleSubmit}>
                        <div id="spacer"></div>
                        <label>
                            Your name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>
                            Email address</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label>
                            Password</label>
                        <input
                            type="text"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button id="continue" type="submit">Continue</button>
                    </form>
                </div>
                <div>
                    <div id="login-link">Already a member? <Link id="login" to="/login">Log in.</Link></div>
                </div>
            </div>
        </>
    );
}


export default SignUpPage
