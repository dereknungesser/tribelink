import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../store/message'
import { useHistory } from 'react-router-dom';

const MessageBoard = () => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('')
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
        };

        let createdMessage = await dispatch(createMessage(payload))

        if (createdMessage) {
            history.push(`/message/${createdMessage.id}`)
        }
    }


    return (
        <>
            <h1>MESSAGE BOARD PAGE</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <textarea
                        type="text"
                        placeholder="Create a post..."
                        onChange={setBody} />
                    <button type="submit">Post</button>
                </form>
            </section>
        </>
    )
}

export default MessageBoard;
