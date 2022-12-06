import React from "react";
import {useNavigate} from "react-router-dom";

export default function Login () {
    const navigate = useNavigate();

      // const [showLogin, setShowLogin] = useState(true)
    // const [ifUser, setIfUser] = useState(false)

    // const handleShowLogin = () => {
    //     setShowLogin(showLogin => !showLogin)
    // }

    // const handleIfUser = () => {
    //     setIfUser(ifUser => !ifUser)
    // }
    return (
        <div>
            <button className="absolute top-1/2">LOGIN</button>
            <button>SIGNUP</button>
        </div>
    )
}