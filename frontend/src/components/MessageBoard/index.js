import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMessage, getMessages } from '../../store/message'

import './messageboard.css';

const MessageBoard = () => {

    const dispatch = useDispatch();
    const [body, setBody] = useState([]);

    const updateBody = (e) => setBody(e.target.value);

    const userId = useSelector((state) => state.session.user.id)
    const messages = useSelector((state) => state.messages)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
            userId
        };

        dispatch(createMessage(payload))

    }

    useEffect(() => {
        dispatch(getMessages())
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
                    <button className='button' type="submit">Post</button>
                </form>
            </div>
            <div>
                {messages && Object.values(messages).map(messagesList => {
                    const { User:{username}, body } = messagesList
                    return (
                        <div className="postEle">
                            <p className="userName">{username}</p>
                            <h2 className="textBody">{body}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default MessageBoard;
