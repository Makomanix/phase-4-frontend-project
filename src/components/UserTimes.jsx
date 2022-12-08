import React, { useState } from "react";
import TimeTrial from "./TimeTrial";

export default function UserTimes ({ user, updateTimes }) {
    const [ formData, setFormData ] = useState("");
    const { time_trials, id } = user;
    
    const timeTrialCards = time_trials?.map((time_trial) => 
        <TimeTrial 
            key={time_trial.id} 
            id={time_trial.id} 
            time_trial={time_trial}
        />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTime = {
            track_id: formData.track_id,
            driver_id: id,
            Lap_Time: formData.Lap_Time,
            date: formData.date
        }
        fetch('/time_trials', {
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
        <div className="bg-slate-200 absolute bottom-8 left-8 mr-20 h-[36%] w-[30%] rounded-md border-8 outline">
            <h1 className="text-center font-bold underline">My Time Trials</h1>
            <div className="grid grid-cols-1 grid-rows-auto overflow-hidden py-1 gap-y-2">
            {timeTrialCards}
            <form onSubmit={handleSubmit}>
                {/* <label>name</label>
                <input name="driver_id" type="text"></input> */}
                <label>Date</label> 
                <input name="date" placeholder="YYYY-MM-DD" type="text" onChange={handleChange}></input>
                <label>Track</label>
                <select name="track_id" onChange={handleSelect}>
                    <option>Select Track</option>
                    <option value="1">Rainbow Road</option>
                    <option value="2">Koopa Troopa Beach</option>
                    <option value="3">DK Summit</option>
                </select>
                <label>Lap Time</label>
                <input name="Lap_Time" placeholder="time here" type="text" onChange={handleChange}></input>
                <button >Add Time</button>
            </form>
            </div>
        </div>
    )
}