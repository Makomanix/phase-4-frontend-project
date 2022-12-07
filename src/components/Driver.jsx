import React from "react";

export default function Driver ({id, driver, onClickDriver}) {
    const {name, age, country, user_name, bio, car} = driver;
    
    const handleClick = () => {
        onClickDriver(driver);
    }

    return (
        <div className="grid grid-cols-1 grid-rows-3 w-auto h-auto bg-slate-400 mx-2 rounded-xl outline pb-2">
            <div className='text-center font-bold'>{name}</div>
            <div className='text-center font-bold text-yellow-400'>{country}</div>
            <div className="hidden">
                {age}
                {user_name}
                {bio}
                {car}
            </div>
        <button className='text-center font-semibold mx-4'onClick={handleClick}>Details</button>
    </div>
    )
}