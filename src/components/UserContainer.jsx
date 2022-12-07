import React, {useState, useEffect} from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"

export default function UserContainer ({ onUserCreate, user }) {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`/drivers/${id}`)
        .then((res) => res.json())
        .then((user) => setUser(user))
    },[])

    return (
        <div>
            <h1 className="text-center font-bold pt-2">Welcome Drive #1</h1>
            <div>
                <button onClick={onUserCreate}></button>
                <UserProfile user={user}/>
                <UserTimes user={user}/>
                <UserLeaderboard user={user} />
            </div>
        </div>
    )
}