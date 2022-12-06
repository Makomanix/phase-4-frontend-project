import React from "react";
import DriversContainer from "./DriversContainer";
import TracksContainer from "./TracksContainer";
import UserContainer from ".UserContainer";
import Signup from "./Signup";


function TimeTrialsContainer() {
return (
    <div>
        {/* might need to add signup and login component as a ternary here instead of user */}
        {/* Signedup ? <Signup/> : <Login /> */}
        <UserContainer/>
        <TracksContainer/>
        <DriversContainer/>
    </div>
    )
}

export default TimeTrialsContainer;