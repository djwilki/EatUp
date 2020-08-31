import React from 'react';
import { render } from 'react-dom';

const logoutButton = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name='email' value='' />
                <input type="hidden" name='password' value='' />
                <button type="submit" />
            </form>
        </>
    )
}
