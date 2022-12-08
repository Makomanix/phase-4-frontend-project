import React from "react";
import TimeTrial from "./TimeTrial";

export default function UserTimesCollection ({ user }) {
    const { time_trials } = user;

    const timeTrialCards = time_trials?.map((time_trial) => 
        <TimeTrial 
            key={time_trial.id} 
            id={time_trial.id} 
            time_trial={time_trial}
        />
    );
    
    return(
      <div>
        {timeTrialCards}
      </div>
    );
}