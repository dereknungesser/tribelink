import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, createEvent } from '../../store/event'

function Event() {

    const dispatch = useDispatch();
    const [body, setBody] = useState([]);

    const updateBody = (e) => setBody(e.target.value);

    const eventsListed = useSelector((state) => state.event)
    const userId = useSelector((state) => state.session.user.id)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
            userId
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
                    <label>
                        Date: <input type='text' placeholder="MM/DD/YY" />
                        Time: <input type='text' placeholder="" />
                    </label>
                    <textarea
                        type='text'
                        placeholder='Write about your event...'
                        onChange={updateBody} />
                    <button className='button' type="submit">Create Event</button>
                </form>
            </div>
            <div>
                {eventsListed && Object.values(eventsListed).map.map(eventList => {
                    const { User:{username}, body } = eventList
                    return (
                        <div>
                            <h1>{body}</h1>
                            <h2>{username}</h2>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Event;
