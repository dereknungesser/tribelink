import {fetch} from '../../store/csrf.js'
import { useState, useEffect } from 'react';

function Event() {

    const [eventsListed, setEventsListed] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/events");
            setEventsListed(response.data.eventList)
            console.log(response)
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>EVENTS PAGE</h1>
            <div>
                {eventsListed && eventsListed.map(eventList => {
                    return (
                        <div>
                            <h2>{eventList.body}</h2>
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Event;
