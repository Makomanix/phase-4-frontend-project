import React from "react";
import Driver from "./Driver";

export default function UserTimes ({user}) {
    const { time_trials } = user
    // const { track_id, driver_id, Lap_Time, date } = time_trials

    return (
        <div>
            {Driver.time_trials}
            {/* {time_trials.date} */}
        </div>
    )
}
