import React, {useState} from "react";

export default function NavBar () {
    const [showLogin, setShowLogin] = useState(true)

    const handleShowLogin = () => {
        setShowLogin(showLogin => !showLogin)
    }

    return (
    <div>
        <button onClick={handleShowLogin}>Don't have an account? click here</button>
        {showLogin ? <Login /> : <Signup />}
    </div>
    )
}