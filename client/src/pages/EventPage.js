import React from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect, Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton'
import MakeEventButton from '../components/MakeEventButton'
import './EventPage.css';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/meetup_logo.png';
import icon from '../images/meetup_icon.png';
// import CalendarEvent from '../components/CalendarEvent'
import { deleteEvent } from '../store/event'

function EventPage() {
    const currentUserId = useSelector(state => state.auth.id);
    let event = {}
    let day = {};
    const dispatch = useDispatch();




    event = useSelector(state => state.event);
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

    if (Object.keys(event).length > 0) {
        day = event.event.event.date.split("T")[0];
    }

    function handleClick(e) {
        e.preventDefault();
        console.log(event.event.event.id)
        dispatch(deleteEvent(event.event.event.id));
        window.location.replace("/")
    }



    function deleteButton() {
        if (Object.keys(event).length > 0) {
            if (currentUserId === event.event.event.hostId) {
                return <button type="button" onClick={handleClick}>Delete</button>
            }
        }
    }

    function editButton() {
        if (Object.keys(event).length > 0) {
            if (currentUserId === event.event.event.hostId) {
                return <Link to={`/event/${event.event.event.id}/edit`}>Edit</Link>
            }
        }
    }

    return (
        <div>
            <div className="header-banner">
                <Link to="/"><img src={logo} alt="logo" /></Link>

                <div className="links">
                    {currentUserId ? <MakeEventButton /> : ''}
                    {currentUserId ? <LogoutButton /> : ''}
                    {!currentUserId ? <LoginButton /> : ''}
                </div>
            </div>

            <div id="event-banner">
                <div id="event-banner__content">
                    {(Object.keys(event).length > 0 && !!day)
                        ? <div className='event-date'>{getDayOfWeek(day)}, {getMonthOfYear(day)} {new Date(day.replaceAll('-0', '-')).getDate()}, {getYear(day)}</div>
                        : <div>Loading...</div>}
                    <div>{(Object.keys(event).length > 0 && !!day)
                        ? <div className='event-name'>{event.event.event.name}</div>
                        : <div>Loading...</div>}</div>
                    <div className="user-content">
                        <img className="user-icon" src={icon}></img>
                        <div className='host-content'>
                            <div className='host-title'>Hosted by</div>
                            {(Object.keys(event).length > 0 && !!day)
                                ? <div className='event-host'>{event.event.event.User.name}</div>
                                : <div>Loading...</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div className='event-page-container'>
                {/* <img src={icon}></img> */}
                <div className='event-width'>
                    <div className="event-options">
                        <div id='Details'>Details</div>
                        <div>
                        {deleteButton()}
                        {editButton()}
                        </div>
                    </div>
                    {(Object.keys(event).length > 0)
                        ? <div className='event-description'>{event.event.event.description}</div>
                        : <div>Loading...</div>}
                    <div id='attendees'>Attendees ({(Object.keys(event).length > 0)
                        ? <span>{event.event.event.UserEvents.length}</span>
                        : <span>{"Loading..."}</span>})</div>
                    <div>
                        {}
                    </div>
                </div>
            </div>
            <div className='join-banner'>
                <div>
                    {(Object.keys(event).length > 0 && !!day)
                        ? <div className='event-date'>{getDayOfWeek(day)}, {getMonthOfYear(day)} {new Date(day.replaceAll('-0', '-')).getDate()}, {getYear(day)}</div>
                        : <div>Loading...</div>}
                    <div>{(Object.keys(event).length > 0 && !!day)
                        ? <div>{event.event.event.name}</div>
                        : <div>Loading...</div>}</div>
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
