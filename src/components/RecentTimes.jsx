import React from "react";

export default function RecentTimes ({time_trial}) {
    const { track_id, driver_id, Lap_Time, date } = time_trial
    
    return (
    <div className="absolute top-1/2 left-1/2">
            {track_id}
    </div>
    )
}