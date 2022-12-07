import React from "react";

export default function DriverDetails ({driver}) {
    if(!driver) return null;
    
    const {name, age, country, user_name, bio, car} = driver;

    return (
        <div>
            {/* {name} 
            {age} 
            {country} 
            {user_name} 
            {bio} 
            {car} */}
        </div>
    )
}