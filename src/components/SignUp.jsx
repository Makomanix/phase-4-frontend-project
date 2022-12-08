import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const emptyForm = {
    name: "",
    age: "",
    country: "",
    user_name: "",
    bio: "",
    car: ""
}

export default function SignUp ({ drivers, setDrivers }) {
    const [ formData, setFormData ] = useState(emptyForm);
    const navigate = useNavigate();
    
    const addDriver = (newDriver) => {
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
        .then((res) => res.json())
        .then((newDriver) => {
            addDriver(newDriver)
        })
        .then(navigate("/")) 
    }

    return (
        <div>
            <div className="bg-slate-200 xl:left-[35%] absolute top-[30%] left-[30%] outline rounded-lg" >
                <div>
                    <form onSubmit={handleSubmit} className="grid overflow-hidden xl grid-cols-2 grid-rows-6 gap-px gap-x-1 gap-y-2 mx-4 p-2">
                        <label className='text-center font-bold'>Name: </label> 
                        <input className='text-center rounded-md' name="name" placeholder="your name" type="text" onChange={handleChange}/>
                        <label className="text-center font-bold">Age: </label>
                        <input className='text-center rounded-md' name="age" placeholder="age" type="text" onChange={handleChange}></input>
                        <label className="text-center font-bold">Country: </label>
                        <input className='text-center rounded-md' name="country" placeholder="country" type="text" onChange={handleChange}></input>
                        <label className="text-center font-bold">Username: </label>
                        <input className='text-center rounded-md' name="username" placeholder="username" type="text" onChange={handleChange}></input>
                        <label className="text-center font-bold">Password: </label>
                        <input className='text-center rounded-md' name="password" placeholder="password" type="text" onChange={handleChange}></input>
                        <button className="absolute bottom-1 left-[42%]">Sign Up!</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

