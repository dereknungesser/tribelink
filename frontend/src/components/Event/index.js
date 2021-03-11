import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, createEvent } from '../../store/event'
import "./event.css"

function Event() {

    const dispatch = useDispatch();

    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [body, setBody] = useState("");

    const eventsListed = useSelector((action) => action.event)
    const userId = useSelector((state) => state.session.user.id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            startTime,
            endTime,
            date,
            name,
            body

        };

        dispatch(createEvent(payload))

    }

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <>
            <h1>EVENTS PAGE</h1>
            <div className='createEvent'>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <label>Name:
                            <input
                                onChange={(e) => {
                                setName(e.target.value);
                                }}
                                type="text"
                            />
                        </label>
                        <label>Start Time:
                            <input
                                onChange={(e) => {
                                setStartTime(e.target.value);
                                }}
                                type="time"
                            />
                        </label>
                        <label>End Time:
                            <input
                                onChange={(e) => {
                                setEndTime(e.target.value);
                                }}
                                type="time"
                                className="end-time"
                            />
                        </label>
                        <label>Date:
                            <input
                                onChange={(e) => {
                                setDate(e.target.value);
                                }}
                                type="date"
                            />
                        </label>
                        <textarea
                            type='text'
                            className="event-body"
                            placeholder='Write about your event...'
                            onChange={(e) => setBody(e.target.value)} />
                        <button className='button' type="submit">Create Event</button>
                    </div>
                </form>
            </div>
            <div>
                {eventsListed && Object.values(eventsListed).map.map(eventList => {
                    const { User:{username}, Event:{name, body} } = eventList
                    return (
                        <div>
                            <h3>{username}</h3>
                            <h1>{name}</h1>
                            <h2>{body}</h2>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Event;
