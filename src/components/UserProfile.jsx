import React from "react";

export default function UserProfile ({ user }) {
    const { name, age, country, bio, car } = user;

    return (
        <div className='absolute top-[15%] left-[3%] '>
            <div className="bg-slate-200 grid overflow-hidden xl grid-cols-1 grid-rows-5 px-2 outline rounded-lg">
            <h1 className="text-center font-bold underline">Profile</h1>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Name: {name}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Age: {age}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Country: {country}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Car: {car}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 truncate outline">Bio: {bio}The greatest driver in all history of racing </div>
            </div>
        </div>
    );
}