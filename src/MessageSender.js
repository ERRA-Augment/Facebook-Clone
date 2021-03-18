import React from 'react'
import "./MessageSender.css"
import { Avatar } from "@material-ui/core"

function MessageSender() {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="messageSender">
        <div className="messageSender__top">
            <Avatar />
            <form>
                <input type="text" placeholder={`What's on my mind?`} />
                <input type="text" placeholder="image URL (NOT OPTIONAL)" />
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>

            </form>
        </div>
        <div className="messageSender__bottom">
        </div>
        </div>
    )
}

export default MessageSender;
