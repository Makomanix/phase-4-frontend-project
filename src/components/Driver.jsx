import React from "react";

export default function Driver ({id, driver, onClickDriver}) {
    const {name, age, country, user_name, bio, car} = driver;
    
    const handleClick = () => {
        onClickDriver(driver);
    }

    return (
    <div>
        <button onClick={handleClick}/>
        {name}
        {age}
        {country}
        {user_name}
        {bio}
        {car}
    </div>
    )
}