import React, {useState} from "react";

export default function NavBar () {
    const [showLogin, setShowLogin] = useState(true)

    const handleShowLogin = () => {
        setShowLogin(showLogin => !showLogin)
    }
    return (
        <div className=" w-screen h-[60px] z-10 bg-zinc-300 fixed drop-shadow-lg">
                <h1 className='font-bold text-center text-4xl mt-2'>FrontRunner</h1>
<button onClick={handleShowLogin}>Don't have an account? click here</button>
{showLogin ? <Login /> : <Signup />}
            </div>
        // </div>
    )
}
