import React, {useState} from "react";
import DriversContainer from "./DriversContainer";
import TracksContainer from "./TracksContainer";
import UserContainer from ".UserContainer";
import SignUp from "./SignUp";
import {useNavigate} from "react-router-dom";

export default function TimeTrialsContainer() {
    const [ifUser, setIfUser] = useState(false)
    const navigate = useNavigate();
    const API = "http://localhost:3000"
    // const login = "/"
    
     const handleIfUser = () => {
        setIfUser(ifUser => !ifUser)
     }
    return (
    <div>
        {/* might need to add signup and login component as a ternary here instead of user */}
        {/* Signedup ? <SignUp /> : <Login /> */}
        <div>{ 
        ifUser ? 
        <UserContainer 
        API={API} 
        onUserCreate={handleIfUser} 
        user={ifUser}
        /> : navigate("/login") 
        }
        </div>
        {/* <button onClick={handleIfUser}>Something with User or w.e</button> */}
        <TracksContainer API={API}/>
        <DriversContainer API={API}/>
    </div>
    )
}