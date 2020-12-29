import { useState } from 'react';
import { useDispatch } from 'react-redux';

const MessageBoard = () => {
    const dispatch = useDispatch();
    const [body, setBody] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            body,
        };
        let createdMessage = await dispatch(createMessage(payload))
    }


    return (
        <h1>MESSAGE BOARD PAGE</h1>
    )
}

export default MessageBoard;
