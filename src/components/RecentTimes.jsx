import React from "react";

export default function RecentTimes ({time_trial}) {
    const { track_id, driver_id, Lap_Time, date } = time_trial
    
    return (
        <div className= "relative h-screen w-full">
            <div className=" absolute inset-y-0 right-0 w-42 grid grid-cols-1 grid-rows-1 w-auto h-16 bg-slate-400 mx-2 rounded-xl outline" >
        {date}
        {track_id}
        {driver_id}
        {Lap_Time}
    </div>
    </div>
    )
}