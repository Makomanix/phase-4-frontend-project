import React, {useState, useEffect} from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"
import { useNavigate } from "react-router-dom"


export default function UserContainer ({ onUserCreate }) {
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    const [time_trials, setTime_Trials] = useState([])



    useEffect(() => {
        const currentDriver = sessionStorage.getItem("user_id")
        if (currentDriver == null){
            navigate("/login")
        }else {
            fetch(`/drivers/${currentDriver}`)
            .then((res) => res.json())
            .then((user) => setUser(user))
        }
    },[time_trials])

    useEffect(() => {
        fetch(`/time_trials`)
        .then((res) => res.json())
        .then((time_trials) => setTime_Trials(time_trials));
    },[setTime_Trials])

    function updateTimes(newTime) {
        setTime_Trials([...time_trials, newTime])
    }

    return (
        <div>
            <div>
                <div>
                <button onClick={onUserCreate}></button>
                <UserProfile user={user}/>
                <UserTimes user={user} updateTimes={updateTimes}/>
                <UserLeaderboard user={user} time_trials={time_trials}/>
                </div>
            </div>
        </div>
    )
}