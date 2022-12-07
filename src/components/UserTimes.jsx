import React, { useEffect } from "react";
import TimeTrial from "./TimeTrial";

export default function UserTimes ({user}) {
    const {time_trials} = user
    // const {track_id, driver_id, Lap_Time, date} = time_trials

    const timeTrialCards = time_trials?.map((time_trial) => <TimeTrial key={time_trial.id} id={time_trial.id} time_trial={time_trial}/>)

    return (
        <div>
            {timeTrialCards}
        </div>
    )
}