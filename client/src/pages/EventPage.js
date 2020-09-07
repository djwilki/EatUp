import React from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect, Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton'
import './EventPage.css';
import { useSelector } from 'react-redux';
import logo from '../images/meetup_logo.png';
import icon from '../images/meetup_icon.png';
import CalendarEvent from '../components/CalendarEvent'


function EventPage() {
    const currentUserId = useSelector(state => state.auth.id);
    let content = {}
    let day = {};

    content = useSelector(state => state.content);
    console.log(content)
    function getDayOfWeek(date) {
        const dayOfWeek = new Date(date.replaceAll('-0', '-')).getDay();
        return isNaN(dayOfWeek) ? null :
            ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }

    function getMonthOfYear(date) {
        const monthOfYear = new Date(date.replaceAll('-0', '-')).getMonth();
        return isNaN(monthOfYear) ? null :
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthOfYear];
    }

    function getYear(date) {
        const year = new Date(date.replaceAll('-0', '-')).getFullYear();
        return year;
    }

    if (Object.keys(content).length > 0) {
        day = content.content.event.date.split("T")[0];
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

            <div id="event-banner">
                <div id="event-banner__content">
                    {(Object.keys(content).length > 0 && !!day)
                        ? <div className='event-date'>{getDayOfWeek(day)}, {getMonthOfYear(day)} {new Date(day.replaceAll('-0', '-')).getDate()}, {getYear(day)}</div>
                        : <div>Loading...</div>}
                    <div>{(Object.keys(content).length > 0 && !!day)
                        ? <div className='event-name'>{content.content.event.name}</div>
                        : <div>Loading...</div>}</div>
                    <div className="user-content">
                        <img className="user-icon" src={icon}></img>
                        <div className='host-content'>
                            <div className='host-title'>Hosted by</div>
                            {(Object.keys(content).length > 0 && !!day)
                                ? <div className='event-host'>{content.content.event.User.name}</div>
                                : <div>Loading...</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div className='event-container'>
                {/* <img src={icon}></img> */}
                <div className='event-width'>
                    <div id='Details'>Details</div>
                    {(Object.keys(content).length > 0)
                        ? <div className='event-description'>{content.content.event.description}</div>
                        : <div>Loading...</div>}
                    <div id='attendees'>Attendees ({(Object.keys(content).length > 0)
                        ? <span>{content.content.event.UserEvents.length}</span>
                        : <span>{"Loading..."}</span>})</div>
                    <div>
                        {}
                    </div>
                </div>
            </div>
            <div className='join-banner'>
                <div>
                    <div></div>
                    <div></div>
                </div>
                {/* <button onClick={handleClick}></button> */}
            </div>

            <div className="page-footer">
                <div className="footer-pages">
                    <a href="/login">Log in</a>
                </div>
                <div className="footer-links">
                    <a href="/login">Help</a>
                    <a href="/login">About Us</a>
                    <a href="/login">Jobs</a>
                </div>
            </div>
        </div>
    )
}


export default EventPage
