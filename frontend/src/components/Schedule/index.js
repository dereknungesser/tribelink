import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/event'

import "./schedule.css"

function Schedule() {

    const dispatch = useDispatch();

    const userId = useSelector((state) => state.session.user.id)
    const username = useSelector((state) => state.session.user.username)
    const events = useSelector((state) => state.events)

    useEffect(() => {
        dispatch(getEvents(events))
    }, [])


    return (
        <div>
                <h1 className='recent'>My Schedule</h1>
                {events && Object.values(events).map(eventList => {
                    const { username, name, date, startTime, endTime, body } = eventList
                    return (
                        <div className="postEle">
                            <h2 className="event textUsername">{username}</h2>
                            <h2 className="event textName">{name}</h2>
                            <h2 className="event textDate">{date}</h2>
                            <h2 className="event textStart">Start Time: {startTime}</h2>
                            <h2 className="event textEnd">End Time: {endTime}</h2>
                            <h2 className="event textBody">{body}</h2>
                        </div>
                    )
                })}
            </div>
    )
}

export default Schedule;
