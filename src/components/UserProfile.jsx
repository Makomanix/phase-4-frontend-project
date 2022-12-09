import React from "react";

export default function UserProfile ({ user }) {
    const { name, age, country, bio, car } = user;

    return (
        <div className='absolute bg-slate-200 top-[16%] left-[3%] h-[31%] w-[30%] xl:top-[22%] rounded-md outline'>
            <div className="bg-slate-200 grid  h-[97%] gap-y-2 grid-cols-1 grid-rows-5 px-2 rounded-lg">
            <h1 className="text-center font-bold underline">Profile</h1>
                <div className="bg-slate-400 text-center pl-2 rounded-lg outline">Name: {name}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg outline">Age: {age}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg outline">Country: {country}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg outline">Car: {car}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg truncate outline">Bio: {bio} </div>
            </div>
        </div>
    );
} 