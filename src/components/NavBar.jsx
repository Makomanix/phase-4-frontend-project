import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NavBar () {
    const navigate = useNavigate()
 
    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        navigate('/login')
    }

    return (
        <div>
            <div className=" w-screen h-[60px] z-10 bg-slate-400 fixed drop-shadow-lg">
                <h1 className='font-bold text-center text-4xl mt-2'>Ready Set Kart</h1>
                <div>
                    <button className="absolute top-4 left-2">
                        <NavLink to="/">User Profile</NavLink>
                    </button>
                    <button className="absolute top-4 left-28 ml-1">
                    <NavLink to="/drivers">drivers</NavLink>
                    </button>
                    <button className="absolute top-4 left-48">
                    <NavLink to="/tracks">tracks</NavLink>
                    </button>
                    <button className="absolute top-4 right-[2%]" onClick={handleLogOut}>Log Out</button>
                </div>  
            </div>
        </div>
    )
}
