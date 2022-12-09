import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import { useNavigate } from "react-router-dom"
import UserTimesCollection from "./UserTimesCollection";
import UserTimesForm from "./UserTimesForm";

export default function UserContainer ({ onUserCreate }) {
    const [ user, setUser ] = useState([]);
    const [ time_trials, setTime_Trials ] = useState([]);
    const [ isUserTime, setIsUserTime ] = useState(false)
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
    },[]);

    const handleIfUserClick = () => {
        setIsUserTime(isUserTime => !isUserTime)
    }

    return (
        <div>
            <div>
                <div>
                <button onClick={onUserCreate}></button>
                <UserProfile user={user}/>
                <UserTimesForm user ={user} updateTimes={updateTimes}/>
                <h1 className="absolute font-bold top-[17%] left-[60%] underline z-40">{isUserTime ? "Recent Time Trials" : "Personal Time Trials"}</h1>
                <button className="absolute top-[16%] left-[40%] mt-1 xl:mt-3 z-40" onClick={handleIfUserClick}>{isUserTime ? "Check Personal" : "Check Recent"}</button>
                {isUserTime ? 
                <UserLeaderboard 
                    user={user} 
                    time_trials={time_trials}
                /> : 
                <UserTimesCollection 
                    user={user}
                />
                }
                </div>
            </div>
        </div>
    );
}
