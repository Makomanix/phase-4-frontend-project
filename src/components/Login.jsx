import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function Login () {
    const [ formData, setFormData ] = useState('');
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentDriver = sessionStorage.getItem("user_id")
        if (currentDriver) {
            navigate("/")
        }
    }, []);

    const { username, password } = formData;

    const handleLogin = (driver) => {
        sessionStorage.setItem("user_id", driver.id);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const driver = {
            username,
            password
        }
        fetch(`/login`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(driver)
        })
        .then(res => {
            if(res.ok){
                res.json().then(currentDriver => handleLogin(currentDriver)).then(() => {navigate("/")})
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })    
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleClick = () => {
        navigate("/sign_up")
    }

    return (
        <div className="bg-slate-400 absolute top-[30%] left-[36%] w-[30%] h-[50%] outline rounded-md">
            <form className="flex flex-col justify-center items-center space-y-3 h-[95%] w-auto" onSubmit={onSubmit} >
                <label className=" text-center font-bold w-28 rounded-lg">Username:</label>
                <input className="bg-slate-200 text-center w-38 outline rounded-md" type='username' name='username' value={username} onChange={handleChange}/>
                <label className=" text-center font-bold w-28 rounded-lg">Password:</label>
                <input className="bg-slate-200 text-center w-38 outline rounded-md" type='password' name='password' value={password} onChange={handleChange}/>
                <button className="w-28" value='Log in!'>Log In!</button>
                <button className="w-28" onClick={handleClick}>SIGNUP</button>
            </form>
            {errors? <div>{errors}</div>:null}
        </div>
    );
}