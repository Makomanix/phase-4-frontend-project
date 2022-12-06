import React from "react";
import DriversContainer from "./DriversContainer";
import TracksContainer from "./TracksContainer";
import UserContainer from ".UserContainer";
import Signup from "./Signup";


function TimeTrialsContainer() {

    const API = "http://localhost:3000"

    return (
    <div>
        {/* might need to add signup and login component as a ternary here instead of user */}
        {/* Signedup ? <Signup/> : <Login /> */}
        <UserContainer API={API}/>
        <TracksContainer API={API}/>
        <DriversContainer API={API}/>
    </div>
    )
}

export default TimeTrialsContainer;