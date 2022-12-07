import React, {useState} from "react";

export default function NavBar () {
    // const [showLogin, setShowLogin] = useState(true)
    // const [ifUser, setIfUser] = useState(false)

    // const handleShowLogin = () => {
    //     setShowLogin(showLogin => !showLogin)
    // }

    // const handleIfUser = () => {
    //     setIfUser(ifUser => !ifUser)
    // }
    return (
        <div className=" w-screen h-[60px] z-10 bg-slate-400 fixed drop-shadow-lg">
                <h1 className='font-bold text-center text-4xl mt-2'>Ready Set Kart</h1>
                {/* <button onClick={handleShowLogin}>Don't have an account? click here</button> */}
                {/* {showLogin ? <Login /> : <Signup />} */}
                {/* {ifUser ? <UserContainer /> : null} */}
            </div>
        // </div>
    )
}
