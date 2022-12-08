import React from "react";

export default function UserProfile ({user}) {
    const {name, age, country, bio, car} = user

    return (
        <div className='absolute left-8 top-24 h- w-[60%]'>
            <div class="bg-slate-200 grid overflow-hidden xl grid-cols-1 grid-rows-5 gap-px gap-x-14 gap-y-1 grid-flow-row w-1/2 h-58 p-2 border-4 outline rounded-lg">
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Name: {name}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Age: {age}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Country: {country}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 outline">Car: {car}</div>
                <div className="bg-slate-400 text-center pl-2 rounded-lg my-1 truncate outline">Bio: {bio}The greatest driver in all history of racing </div>
            </div>
        </div>
    )
}