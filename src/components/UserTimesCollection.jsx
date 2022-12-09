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
      <div className="bg-slate-200 absolute bottom-[4%] left-[30%] ml-20 h-[80%] w-[60%] rounded-md border-4 outline">
        <div className="grid grid-cols-1 grid-rows-auto gap-y-2 mb-4 pt-8 xl:pt-12">
        {timeTrialCards}
      </div>
      </div>
    );
}