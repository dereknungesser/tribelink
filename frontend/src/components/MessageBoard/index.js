import {fetch} from '../../store/csrf.js'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../store/message'
import { useHistory } from 'react-router-dom';

const MessageBoard = () => {

    const dispatch = useDispatch();

    const [messagePost, setMessagePost] = useState([]);
    const [body, setBody] = useState([]);

    const updateBody = (e) => setBody(e.target.value);

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
        };

        let createdMessage = await dispatch(createMessage(payload))

        if (createdMessage) {
            history.push(`/messageboard`)
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/messages");
            setMessagePost(response.data.messagesList);
        }
        fetchData();
    }, [])

    return (
        <>
            <h1>MESSAGE BOARD PAGE</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        type="text"
                        placeholder="Create a post..."
                        onChange={updateBody} />
                    <button type="submit">Post</button>
                </form>
            </div>
            <div>
                {messagePost && messagePost.map(messagesList => {
                    return (
                        <div>
                            <h2>{messagesList.body}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default MessageBoard;
