import React from "react";
import "../layout/MessagingRoom.css";
import Freinds from "../components/Freinds";
import Messages from "../components/Messages";

const MessagingRoom = () =>{
    return (
        <div className="messaging-container">
            <div className="messaging-wrapper">
                <div className="freinds">
                    <Freinds />
                </div>
                <div className="messages">
                    <Messages />
                </div>
            </div>
        </div>
    )
}

export default MessagingRoom;
