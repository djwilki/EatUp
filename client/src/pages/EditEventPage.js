import React, { useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect, Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton'
import './EventPage.css';
import { useDispatch, useSelector } from 'react-redux';
 import {editEvent} from '../store/event'
import logo from '../images/meetup_logo.png'

function MakeEventPage() {
    const currentUserId = useSelector(state => state.auth.id);
    const [group, setGroup] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [seats, setSeats] = useState('');
    const dispatch = useDispatch();
    const eventId = window.location.href.split("/")[4]

    const handleSubmit = (e) => {
        console.log(group, date, time, description, title, seats);
        const obj = {}

               Object.assign(obj, {groupId: group, date:`${date} ${time}`, description, name: title, seats});

        dispatch(editEvent(obj, eventId));
        window.location.replace(`/events/${eventId}`)
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
                <div>
                    <div>Edit an event</div>
                </div>
                <div>
                        <label>Title <span>(required)</span></label>
                        <input onChange={(e) => setTitle(e.target.value)}></input>
                        <label>Date and time</label>
                        <div>
                            <input type="date" onChange={(e) => setDate(e.target.value)}></input>
                            <input type="time" onChange={(e) => setTime(e.target.value)}></input>
                        </div>
                        {/* <label>Duration</label>
                        <select>
                            <option value="2:00"></option>
                        </select> */}
                        <label>Description <span>(required)</span></label>
                        <textarea type="text" onChange={(e) => setDescription(e.target.value)}></textarea>
                        <label>Seats <span>(required)</span></label>
                        <input type="number" min="1" onChange={(e) => setSeats(e.target.value)}></input>
                    </div>

                <div className="footer">
                    <div>
                        <Link to="/">Cancel</Link>
                        <button type="click" onClick={handleSubmit}>Publish</button>
                    </div>
                    {/* <button onClick={handleClick}></button> */}
                </div>
        </div>
    )
}


export default MakeEventPage
