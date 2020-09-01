import React from 'react';
import {logout} from '../store/auth'
import {useDispatch} from 'react-redux';

const LogoutButton = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logout());
        window.location.replace("http://localhost:3000/login");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button type="submit">Log out</button>
            </form>
        </>
    )
}

export default LogoutButton;
