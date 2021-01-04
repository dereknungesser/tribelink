import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './homeview.css';

function Homeview() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <>
                <div className='welcome'>
                    <h1>Welcome, {sessionUser.username}</h1>
                </div>
                {/* <div className="messageBoard">
                    <MessageBoard />
                </div> */}
                <div>
                    <h2 className='connectMessage'>Stay Connected with Family and Friends</h2>
                    <div className='connect'>
                        <a href='https://zoom.us/signin'>Zoom</a>
                        <a href='https://www.amazon.com/adlp/watchparty'>Amazon Watch Party</a>
                        <a href='https://help.disneyplus.com/csp?id=csp_article_content&sys_kb_id=8735ca5ddb631c94c2deeacb139619b7'>Disney+ GroupWatch</a>
                    </div>
                    <h2 className='gamesMessage'>Games for Zoom</h2>
                    <div className='games'>
                        <a href='https://myfreebingocards.com/virtual-bingo'>Virtual Bingo</a>
                        <a href='https://www.randomtriviagenerator.com/?fbclid=IwAR3mVep1dcLeuN1mxmfoSjKf8iLFwGz3qCV9TMTonNkrkCwuM9ggHnUFtnE#!/'>Trivia</a>
                        <a href='https://kahoot.it/'>Kahoot</a>
                    </div>
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
