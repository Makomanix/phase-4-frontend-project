import React, { useEffect } from "react";
import TimeTrial from "./TimeTrial";

export default function UserTimes ({user}) {
    const {time_trials} = user
    // const {track_id, driver_id, Lap_Time, date} = time_trials

    const timeTrialCards = time_trials?.map((time_trial) => <TimeTrial key={time_trial.id} id={time_trial.id} time_trial={time_trial}/>)

    return (
        <div className="bg-slate-200 absolute bottom-11 left-8 mr-20 h-[35%] w-[30%] rounded-md border-8 outline">
            <div className="grid grid-cols-1 grid-rows-auto overflow-hidden py-1 gap-y-2">
            {timeTrialCards}
            </div>
        </div>
    )
}