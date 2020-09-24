import React from "react";
import "../layout/Input.css";

const Input = () =>{
    return (
        <div className="input-container">
            <div className="input">
                <input className="input-field" placeholder="Enter Your Message ..." />
            </div>
            <div className="send">
                <img alt="" src={require("../assets/send.png")} />
            </div>
        </div>
    )
}

export default Input;
