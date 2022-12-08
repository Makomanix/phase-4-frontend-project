import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"
import { useNavigate } from "react-router-dom"

export default function UserContainer ({ onUserCreate }) {
    const [ user, setUser ] = useState([]);
    const [ time_trials, setTime_Trials ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentDriver = sessionStorage.getItem("user_id")
        if (currentDriver == null){
            navigate("/login")
        }else{
            fetch(`/drivers/${currentDriver}`)
            .then((res) => res.json())
            .then((user) => setUser(user))
        }
    },[time_trials]);

    const updateTimes = (newTime) => {
        setTime_Trials([newTime, ...time_trials])
    }

    useEffect(() => {
        fetch(`/time_trials`)
        .then((res) => res.json())
        .then((time_trials) => setTime_Trials(time_trials));
    },[updateTimes]);

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
    );
}