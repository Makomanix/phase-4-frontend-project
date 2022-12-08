import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import UserContainer from "./UserContainer";

const emptyForm = {
    name: "",
    age: "",
    country: "",
    user_name: "",
    bio: "",
    car: ""
}

export default function SignUp ({drivers, setDrivers}) {
    const [formData, setFormData] = useState(emptyForm)
    const navigate = useNavigate();
    
    function addDriver(newDriver) {
        setDrivers([...drivers,newDriver])
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
        
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/drivers`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({...formData})
        })
        .then((r) => r.json())
        .then((newDriver) => {
            addDriver(newDriver)
        })
        .then(navigate("/")) 
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-3 h-screen w-auto">
                    <div>
                        <label>Name (first & last): </label>
                        <input name="name" placeholder="name here" type="text" onChange={handleChange}/>
                    </div>
                    <div>
                        <label>age: </label>
                        <input name="age" placeholder="age here" type="text" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>country: </label>
                        <input name="country" placeholder="country" type="text" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>username: </label>
                        <input name="username" placeholder="username" type="text" onChange={handleChange}></input>
                    </div>
                    <div>
                        <label>password: </label>
                        <input name="password" placeholder="password" type="text" onChange={handleChange}></input>
                    </div>
                    <button>Sign Up!</button>
                </form>
                {/* <UserContainer drivers={drivers}/> */}
            </div>
        </div>
    )
}

{/* <input 
placeholder="signup or something" 
name="user_name" 
value={formData.user_name} 
onChange={handleChange}
/> */}