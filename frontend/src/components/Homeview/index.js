import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './homeview.css';
import MessageBoard from '../MessageBoard'

function Homeview() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <>
                <div>
                    <h2>Welcome {sessionUser.username}</h2>
                </div>
                <div className="messageBoard">
                    <MessageBoard />
                </div>
            </>
        )
    } else {
        return(
        <h1>Please sign in!</h1>
        )
    }
}

export default Homeview
