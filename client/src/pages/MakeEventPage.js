import React, { useState } from 'react';
import LogoutButton from '../components/LogoutButton';
import { Redirect, Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton'
import './EventPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeEvent } from '../store/event'
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

    const handleSubmit = (e) => {
        console.log(group, date, time, description, title, seats);

        dispatch(makeEvent({ groupId: group, date: `${date} ${time}`, description, name: title, seats, userId: currentUserId }));
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
                <div>Create an event</div>
                <select name="groups" id="groups" onChange={(e) => setGroup(e.target.value)} defaultValue="">
                    <option value="" selected="selected"></option>
                    <option value="1">Breakfast</option>
                    {}
                </select>
            </div>
            {group != ''
                ? <div>
                    <label>Title <span>(required)</span></label>
                    <input onChange={(e) => setTitle(e.target.value)} required></input>
                    <label>Date and time</label>
                    <div>
                        <input type="date" onChange={(e) => setDate(e.target.value)} required></input>
                        <input type="time" onChange={(e) => setTime(e.target.value)} required></input>
                    </div>
                    {/* <label>Duration</label>
                        <select>
                            <option value="2:00"></option>
                        </select> */}
                    <label>Description <span>(required)</span></label>
                    <textarea type="text" onChange={(e) => setDescription(e.target.value)} required></textarea>
                    <label>Seats <span>(required)</span></label>
                    <input type="number" min="1" onChange={(e) => setSeats(e.target.value)} required></input>
                </div>
                : <></>
            }
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
