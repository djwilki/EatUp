import React from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect } from 'react-router-dom';
import './LoginPage.css';
import { useSelector } from 'react-redux';


function HomePage() {

    const currentUserId = useSelector(state => state.auth.id);
    if (!currentUserId) return <Redirect to="/login" />
    return (
        <div>
            <LogoutButton />
        </div>
    )
}


export default HomePage
