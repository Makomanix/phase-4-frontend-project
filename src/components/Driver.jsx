import React from "react";

export default function Driver ({id, driver, onClickDriver}) {
    const {name, age, country, user_name, bio, car} = driver;
    
    const handleClick = () => {
        onClickDriver(driver);
    }

    return (
    <div className='container justify-around'>
        {name}
        {age}
        {country}
        {user_name}
        {bio}
        {car}
        <button className=''onClick={handleClick}>Details</button>
    </div>
    )
}