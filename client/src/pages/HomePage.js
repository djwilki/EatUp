import React from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect, Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton'
import './HomePage.css';
import { useSelector } from 'react-redux';
import logo from '../images/meetup_logo.png';


function HomePage() {
    const currentUserId = useSelector(state => state.auth.id);

    //replace with state tracking number of events in your groups
    const eventCount = 15;
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const date = new Date();
    const currentDate = `${weekdays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`.toUpperCase();
    return (
        <div>
            <div className="banner">
                <Link to="/"><img src={logo} alt="logo" /></Link>

                <div className="links">
                    {currentUserId ? <LogoutButton /> : ''}
                    {!currentUserId ? <LoginButton /> : ''}
                </div>
            </div>
            <div id="event-banner">
                <h1>Find your next event</h1>
                <div><span>{eventCount} events in your groups</span></div>
            </div>
            <div id="search-banner">
                <div id="search-bar">
                    <input id="search-input" type="text" placeholder="Search"></input>
                    <svg id="search-icon" viewBox="0 0 20 20" version="1.1"><defs></defs><g id="Web" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd"><g id="search--small" fill="currentColor"><path d="M8,1 C4.134,1 1,4.134 1,8 C1,11.866 4.134,15 8,15 C9.753,15 11.351,14.351 12.579,13.287 L18.146,18.854 C18.244,18.951 18.372,19 18.5,19 C18.628,19 18.756,18.951 18.854,18.854 C19.049,18.658 19.049,18.342 18.854,18.146 L13.287,12.579 C14.351,11.351 15,9.753 15,8 C15,4.134 11.866,1 8,1 M8,2 C11.309,2 14,4.691 14,8 C14,9.438 13.478,10.832 12.531,11.924 L12.249,12.249 L11.924,12.531 C10.832,13.478 9.438,14 8,14 C4.691,14 2,11.309 2,8 C2,4.691 4.691,2 8,2" id="Fill-1"></path></g></g></svg>
                </div>
            </div>
            <div>{currentDate}</div>
        </div>
    )
}


export default HomePage
