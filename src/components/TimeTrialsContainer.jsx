import React, { useState } from "react";
import DriversContainer from "./DriversContainer";
import TracksContainer from "./TracksContainer";
import UserContainer from ".UserContainer";
import { useNavigate } from "react-router-dom";

export default function TimeTrialsContainer() {
    const [ ifUser, setIfUser ] = useState(false);
    const navigate = useNavigate();
    
    const handleIfUser = () => {
        setIfUser(ifUser => !ifUser)
    }

    return (
    <div>
        <div className="bg-slate-200">{ 
        ifUser ? 
        <UserContainer 
        onUserCreate={handleIfUser} 
        /> : navigate("/login") 
        }
        </div>
        <TracksContainer />
        <DriversContainer />
    </div>
    );
}