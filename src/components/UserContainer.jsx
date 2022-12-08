import React, {useState, useEffect} from "react";
import UserProfile from "./UserProfile"
import UserLeaderboard from "./UserLeaderboard"
import UserTimes from "./UserTimes"
import TracksContainer from "./TracksContainer";
import DriversContainer from "./DriversContainer";
import NavBar from "./NavBar";
import { useNavigate, useParams } from "react-router-dom"


export default function UserContainer ({ onUserCreate }) {
    const navigate = useNavigate()
    const [user, setUser] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const currentDriver = sessionStorage.getItem("user_id")
        if (currentDriver == null){
            navigate("/login")
        }else {
            fetch(`/drivers/${currentDriver}`)
            .then((res) => res.json())
            .then((user) => setUser(user))
        }
    },[])

    return (
        <div>
            <div>
                <button className="absolute top-4 left-[12%] h-8 w-20 z-40 ">Tracks</button>
                <button className="absolute top-4 left-[20%] h-8 w-20 z-40 ">Drivers</button>
                <div>
                <button onClick={onUserCreate}></button>
                <UserProfile user={user}/>
                <UserTimes user={user}/>
                <UserLeaderboard user={user}/>
                </div>
            </div>
        </div>
    )
}