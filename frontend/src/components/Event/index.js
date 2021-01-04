import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/event'

function Event() {

    const dispatch = useDispatch();

    const eventsListed = useSelector((state) => state.event)

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <>
            <h1>EVENTS PAGE</h1>
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
