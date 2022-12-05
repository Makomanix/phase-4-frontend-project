import React, {useState, useEffect} from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"

const API = "http://localhost:3000"

export default function UserContainer () {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`${API}/drivers/${id}`)
        .then((res) => res.json())
        .then((user) => setUser(user))
    },[])



    return (
        <div>
            <UserProfile user={user}/>
            <UserTimes user={user}/>
            <UserLeaderboard user={user}/>
        </div>
    )
}