import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SignUp from "./SignUp"

export default function Login () {
    const [formData, setFormData] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const currentDriver = sessionStorage.getItem("user_id")
        if (currentDriver) {
            navigate("/")
        }
    }, [])

    const {username, password} = formData

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
        <div >
            <form className="flex flex-col justify-center items-center space-y-3 h-screen w-auto" onSubmit={onSubmit} >
                <label className="border-spacing-2">Username:</label>
                <input type='username' name='username' value={username} onChange={handleChange}/>
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={handleChange}/>
                <button  value='Log in!'>Log In!</button>
                <button onClick={handleClick}>SIGNUP</button>
            </form>
            {errors? <div>{errors}</div>:null}
        </div>
    )
}