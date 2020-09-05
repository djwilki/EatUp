import React from 'react';
import {logout} from '../store/auth'
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

const LogoutButton = () => {



    return (
        <>
                <Link to="/login">Log in</Link>
        </>
    )
}

export default LogoutButton;
