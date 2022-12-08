import React from "react";

export default function RecentTimes ({ time_trial }) {
    const { track_id, driver_id, Lap_Time, date } = time_trial;
    
    return (
        <div className="grid grid-cols-4 grid-rows-1 w-auto h-8 bg-slate-400 mx-2 overflow-hidden rounded-xl outline hover:bg-indigo-600 hover:text-orange-500" >
            <div className='text-center pt-1'>{date}:</div>
            <div className='text-center pt-1'>{track_id}</div>
            <div className='text-center pl-8 truncate pt-1'>{driver_id}</div>
            <div className='text-center pr-4 pt-1'>{Lap_Time}.78</div>
    </div>
    )
}