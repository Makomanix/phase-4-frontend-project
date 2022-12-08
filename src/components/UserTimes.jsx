import React, { useEffect, useState } from "react";
import TimeTrial from "./TimeTrial";



export default function UserTimes ({user, updateTimes}) {

    // const emptyForm = {
    //     track_id: "",
    //     driver_id: id,
    //     Lap_Time: "",
    //     date: ""
    // }
    const {time_trials, id} = user
    const [formData, setFormData] = useState("")

    
    // const {track_id, driver_id, Lap_Time, date} = time_trials

    const timeTrialCards = time_trials?.map((time_trial) => <TimeTrial key={time_trial.id} id={time_trial.id} time_trial={time_trial}/>)

    function handleSubmit(e){
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
        .then((r) => r.json())
        .then(data => updateTimes(data))
    }
    
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    function handleInput2(e) {
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
        </div>
    )
}