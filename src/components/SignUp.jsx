import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const emptyForm = {
    name: "",
    age: "",
    country: "",
    user_name: "",
    bio: "",
    car: ""
}

export default function SignUp () {
    const [formData, setFormData] = useState(emptyForm)
    const [drivers, setDrivers] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`${API}/drivers`)
        .then((res) => res.json())
        .then((drivers) => setDrivers(drivers));
    },[drivers])
    
    const addDriver = (newDriver) => {
        setDrivers(drivers => [...drivers,newDriver])
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value})
    }
        
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/drivers`, {
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
            <form onSubmit={handleSubmit}>
            <input 
            placeholder="signup or something" 
            name="user_name" 
            value={formData.user_name} 
            onChange={handleChange}
            />
            </form>
            <UserContainer drivers={drivers}/>
        </div>
    )
}