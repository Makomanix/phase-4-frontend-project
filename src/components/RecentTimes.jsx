import React from "react";

export default function RecentTimes ({time_trial}) {
    const { track_id, driver_id, Lap_Time, date } = time_trial
    
    return (
        <div className="grid grid-cols-4 grid-rows-1 w-auto h-8 overflow-hidden bg-slate-400 mx-12 rounded-xl outline" >
            <div className='text-center pt-1'>{date}</div>
            <div className='text-center pt-1'>{track_id}</div>
            <div className='text-center pt-1'>{driver_id}</div>
            <div className='text-center pt-1'>{Lap_Time}</div>
    </div>
    )
}