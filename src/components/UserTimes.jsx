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
        <div>
            {timeTrialCards}
            <form onSubmit={handleSubmit}>
                {/* <label>name</label>
                <input name="driver_id" type="text"></input> */}
                <label>Date</label> 
                <input name="date" placeholder="YYYY-MM-DD" type="text" onChange={handleChange}></input>
                <label>Track</label>
                <select name="track_id" onChange={handleInput2}>
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
    )
}