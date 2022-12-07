import React, {useState} from "react";
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
    const [currentDriver, setCurrentDriver] = useState(null)

    const [formData, setFormData] = useState('')
    const [errors, setErrors] = useState([])
    // const history = useHistory()

    const {username, password} = formData

    function handleLogin(driver) {
        setCurrentDriver(driver);
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
                res.json().then(currentDriver => handleLogin(currentDriver))
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
    return (
        <div>
            <form onSubmit={onSubmit} className="absolute top-1/2" >
                <label>Username:</label>
                <input type='username' name='username'value={username} onChange={handleChange}/>
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={handleChange}/>
                <button  value='Log in!'>Log In!</button>
            </form>
            {errors? <div>{errors}</div>:null}
            <button>SIGNUP</button>
        </div>
    )
}