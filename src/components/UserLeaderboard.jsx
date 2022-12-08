import React from "react";
import RecentTimes from "./RecentTimes";

export default function UserLeaderboard({ time_trials }) {
    
    const recentTimesCard = time_trials.slice(0,10).map((time_trial) => 
      <RecentTimes
        key={time_trial.id}
        id={time_trial.id}
        time_trial={time_trial}
      />
    );

    return (
        <div className="bg-slate-200 absolute inset-x-0 bottom-[5%] left-[30%] mr-12 ml-20 h-[79%] rounded-md border-8 outline">
            <h1 className="text-center font-bold underline">Recent Time Trials</h1>
            <div className="grid grid-cols-1 grid-rows-auto overflow-hidden py-1 gap-y-2">
            {recentTimesCard}            
            </div>
        </div>
    );
}