import React from 'react';
import {logout} from '../store/auth'
import {useDispatch} from 'react-redux';
import './LogoutButton.css'

const LogoutButton = () => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logout());
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <button className="logout-button" type="submit">Log out</button>
            </form>
        </>
    )
}

export default LogoutButton;
