import React from 'react';
import { Link } from 'react-router-dom';
import './CalendarEvent.css'
const CalendarEvent = ({ event, idx }) => {


    function time() {
        let eventTime = event.date.split("T")[1].slice(0, 5);
        if (eventTime[0] === '0') {
            eventTime = eventTime.slice(1);
        }
        if (Number(eventTime.split(':')[0]) > 12) {
            return eventTime = Number(eventTime.split(':')[0]) - 12 + ':' + eventTime.split(':')[1] + " PM"
        } else {
            return eventTime = eventTime + " AM"
        }
    }
    console.log(event.Group.name)

    const groupLink = `/groups/${event.groupId}`
    const eventLink = `/events/${event.id}`



    return (
        <li key={idx} className='event-container'>
            <div className='event-time'>{time()}</div>
            <div className='event-nav'>
                <Link className='group-link' to={groupLink}>{event.Group.name}</Link>
                <Link className='event-link' to={eventLink}>{event.name}</Link>
                <Link className='location-link' to={eventLink}>{event.location}</Link>
                <div className='attendance'>{event.attendance} members going</div>
            </div>
        </li>
    )
}

export default CalendarEvent;
