import React, { useState } from "react";

export default function UserTimesForm ({ user, updateTimes }) {
    const [ formData, setFormData ] = useState("");
    const { id, time_trials } = user;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTime = {
            track_id: formData.track_id,
            driver_id: id,
            Lap_Time: formData.Lap_Time,
            date: formData.date
        }
        fetch(`/time_trials`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(newTime)
        })
        .then((res) => res.json())
        .then(data => updateTimes(data))
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSelect = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: parseInt(value),
        })
    }

    return (
        <div className="bg-slate-200 absolute bottom-[4%] left-[3%] mr-20 h-[42%] w-[30%] xl:h-[30%] xl:bottom-[10%] rounded-md border-8 outline">
            <h1 className="text-center font-bold underline">My Time Trials</h1>
            <div>
                <form className="grid grid-cols-2 grid-rows-3 overflow-hidden gap-x-2 py-4 gap-y-2 px-1 w-auto h-auto" onSubmit={handleSubmit}>
                {/* <label>name</label>
                <input name="driver_id" type="text"></input> */}
                    <label className="bg-slate-400 text-center rounded-md outline">Date</label> 
                    <input className='bg-slate-200 text-center rounded-md outline' name="date" placeholder="YYYY-MM-DD" type="text" onChange={handleChange}></input>
                    <label className="bg-slate-400 text-center rounded-md outline">Track</label>
                    <select className='bg-slate-200 text-center rounded-md outline' name="track_id" onChange={handleSelect}>
                        <option className='text-center rounded-md outline'>Select Track</option>
                    <option value="1">Rainbow Road</option>
                    <option value="2">Koopa Troopa Beach</option>
                    <option value="3">DK Summit</option>
                </select>
                    <label className="bg-slate-400 text-center rounded-md outline">Lap Time</label>
                    <input className="bg-slate-200 text-center rounded-md outline" name="Lap_Time" placeholder="time here" type="text" onChange={handleChange}></input>
                </form>
                <button className="absolute bottom-0 left-[19%] w-48 xl:left-[26%]">Add Time</button>
            </div>
        </div>
    );
}