import React from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect, Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton'
import './HomePage.css';
import { useSelector } from 'react-redux';
import logo from '../images/meetup_logo.png';
import CalendarEvent from '../components/CalendarEvent'


function HomePage() {
    const currentUserId = useSelector(state => state.auth.id);
    // if(!currentUserId){
    //     <Redirect />
    // }
    let content = {}
    let days = {};

    content = useSelector(state => state.content);

    let dayStorage = [];
    let eventCount = 0;

    if (Object.keys(content).length > 0) {
        days = new Set(content.content.userEvents.map(ele => {
            return ele.date.split("T")[0];
        }))
        days.forEach((ele, idx) => dayStorage.push(
            <div>
                <div className='event-date' key={idx}>{getDayOfWeek(ele)}, {getMonthOfYear(ele)} {new Date(ele.replaceAll('-0', '-')).getDate()}
                </div>
                <ul>
                    {content.content.userEvents.map((event, idx) => {
                        if (ele === event.date.split("T")[0]) { return <CalendarEvent event={event} key={idx} /> }
                    }
                    )}
                </ul>
            </div>))
        eventCount = Object.keys(content.content.userEvents).length;
    }


    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date.replaceAll('-0', '-')).getDay();
        return isNaN(dayOfWeek) ? null :
            ['SUNDAY', 'MONDAY', 'TUESDAY', 'WENDESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'][dayOfWeek];
    }

    function getMonthOfYear(date) {
        const monthOfYear = new Date(date.replaceAll('-0', '-')).getMonth();
        return isNaN(monthOfYear) ? null :
            ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'][monthOfYear];
    }


    return (
        <div>
            <div className="banner">
                <Link to="/"><img src={logo} alt="logo" /></Link>

                <div className="links">
                    {currentUserId ? <LogoutButton /> : ''}
                    {!currentUserId ? <LoginButton /> : ''}
                </div>
            </div>
            <div id="home-event-banner">
                <h1>Find your next event</h1>
                <div><span>{eventCount} events in your groups</span></div>
            </div>
            <div id='fit-page'>
                <div id="search-banner">
                    <div id="search-bar">
                        <input id="search-input" type="text" placeholder="Search"></input>
                        <svg id="search-icon" viewBox="0 0 20 20" version="1.1"><defs></defs><g id="Web" stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd"><g id="search--small" fill="currentColor"><path d="M8,1 C4.134,1 1,4.134 1,8 C1,11.866 4.134,15 8,15 C9.753,15 11.351,14.351 12.579,13.287 L18.146,18.854 C18.244,18.951 18.372,19 18.5,19 C18.628,19 18.756,18.951 18.854,18.854 C19.049,18.658 19.049,18.342 18.854,18.146 L13.287,12.579 C14.351,11.351 15,9.753 15,8 C15,4.134 11.866,1 8,1 M8,2 C11.309,2 14,4.691 14,8 C14,9.438 13.478,10.832 12.531,11.924 L12.249,12.249 L11.924,12.531 C10.832,13.478 9.438,14 8,14 C4.691,14 2,11.309 2,8 C2,4.691 4.691,2 8,2" id="Fill-1"></path></g></g></svg>
                    </div>
                </div>
                {(Object.keys(content).length > 0 && !!days)
                    ? dayStorage
                    : <div>Loading...</div>
                }
            </div>
        </div>
    )
}


export default HomePage
