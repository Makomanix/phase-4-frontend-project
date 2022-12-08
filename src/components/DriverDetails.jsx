import React from "react";

export default function DriverDetails ({ driver }) {
    if(!driver) return null;
    
    const { name, age, country, user_name, bio, car } = driver;

    return (
        <div className="grid h-screen place-items-center">
            <div className="grid grid-cols-1 grid-rows-6 w-72 h-52 mb-32 bg-slate-400 mx-2 rounded-xl outline pb-2">
                <div className='text-center font-bold'>{name}</div>
                <div className='text-center font-bold text-yellow-400'>{country}</div> 
                <div className='text-center font-bold'>{age}</div> 
                <div className='text-center font-bold'>{user_name}</div> 
                <div className='text-center font-bold'>{car}</div>
                <div className='text-center font-bold'>{bio}</div> 
            </div>
        </div>
    )
}