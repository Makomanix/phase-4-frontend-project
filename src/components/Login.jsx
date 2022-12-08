import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SignUp from "./SignUp"

export default function Login ({drivers, setDrivers}) {
    const navigate = useNavigate();

      // const [showLogin, setShowLogin] = useState(true)
    // const [ifUser, setIfUser] = useState(false)

    // const handleShowLogin = () => {
    //     setShowLogin(showLogin => !showLogin)
    // }

    // const handleIfUser = () => {
    //     setIfUser(ifUser => !ifUser)
    // }

    const [formData, setFormData] = useState('')
    const [errors, setErrors] = useState([])
    // const history = useHistory()

    useEffect(() => {
        const currentDriver = sessionStorage.getItem("user_id")
        if (currentDriver) {
            navigate("/")
        }
    }, [])

    const {username, password} = formData



    function handleLogin(driver) {
        sessionStorage.setItem("user_id", driver.id);
        }

    function onSubmit(e){
        e.preventDefault()
        const driver = {
            username,
            password
        }
        // Logs in user
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
    // {
    //     history.push(`/users/${user.id}`)
    // })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        }

        function handleClick(){
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