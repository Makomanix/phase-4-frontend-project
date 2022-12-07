import React, {useState, useEffect} from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"
import TracksContainer from "./TracksContainer";
import DriversContainer from "./DriversContainer";
import NavBar from "./NavBar";

// const API = "http://localhost:3000"

export default function UserContainer ({API, onUserCreate, user}) {
    // const [user, setUser] = useState([])

    // useEffect(() => {
    //     fetch(`${API}/drivers/${id}`)
    //     .then((res) => res.json())
    //     .then((user) => setUser(user))
    // },[])

    return (
        <div>
            <h1 className="text-center font-bold pt-2">Welcome Drive #1</h1>
            <div>
                <button onClick={onUserCreate}></button>
                <TracksContainer/>
                <DriversContainer/>
                <UserProfile user={user}/>
                <UserTimes user={user}/>
                <UserLeaderboard user={user} API={API}/>
            </div>
        </div>
    )
}