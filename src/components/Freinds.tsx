import React from "react";
import "../layout/Freinds.css";
import { Avatar } from "@material-ui/core"

const Freind = () =>{
    return (
        <div className="freind">
            <Avatar alt="" src="../assets/a1.jpg" style={{height:"50px", width: "50px"}} />
            <div className="freind-detail">
                <h5>Ahmed Boughdiri</h5>
                <p>ahmedboughdiri2016@gmail.com</p>
            </div>
        </div>
    )
}

const Freinds = () =>{
    return (
        <div className="freinds-container">
            <Freind />
            <Freind />
            <Freind />
            <Freind />
        </div>
    )
}

export default Freinds;
