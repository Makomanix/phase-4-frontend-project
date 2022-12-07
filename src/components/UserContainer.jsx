import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"
import TracksContainer from "./TracksContainer";
import DriversContainer from "./DriversContainer";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";


export default function UserContainer({ onUserCreate }) {
    const [currentUser, setCurrentUser] = useState([])

    const params = useParams(); 

    useEffect(() => {
        fetch(`/drivers/${params.id}`)
            .then((res) => res.json())
            .then((currentUser) => setCurrentUser(currentUser))
    }, [])

    return (
        <div>
            <h1 className="text-center font-bold pt-2">Welcome Drive #1</h1>
            <div>
                <button onClick={onUserCreate}></button>
                <UserProfile user={currentUser} />
                <UserTimes user={currentUser} />
                <UserLeaderboard user={currentUser} />
            </div>
        </div>
    )
}