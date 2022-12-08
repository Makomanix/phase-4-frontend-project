import React, {useState, useEffect} from "react";
import RecentTimes from "./RecentTimes";

// const API = "http://localhost:3000"

export default function UserLeaderboard({time_trials}) {
    // const [time_trials, setTime_Trials] = useState([])
    // const [tracks, setTracks] = useState([])
    // const [combinedData, setCombinedData] = useState([])

    // useEffect(() => {
    //     Promise.all([
    //         fetch(`${API}/drivers`),
    //         fetch(`${API}/tracks`)            
    //     ])
    //     .then(([resDrivers, resTracks]) =>
    //     Promise.all([resDrivers.json(), resTracks.json()])
    //     )
    //     .then(([drivers, tracks]) => {
    //         setDrivers(drivers);
    //         setTracks(tracks);
    //         setCombinedData(driversData.concat(tracksData))
    //     });
    // },[]);

    // useEffect(() => {
    //     fetch(`/time_trials`)
    //     .then((res) => res.json())
    //     .then((time_trials) => setTime_Trials(time_trials));
    // },[])

    // const recentDrivers = drivers.sort().slice(0,10)

    const recentTimesCard = time_trials.slice(0,10).map((time_trial) => 
        <RecentTimes
        key={time_trial.id}
        id={time_trial.id}
        time_trial={time_trial}
        />
    )

    //make dropdown to select track then have component filter times by order from lowest to highest

    return (
        <div className="bg-slate-200 absolute inset-x-0 bottom-[5%] left-[30%] mr-12 ml-20 h-[79%] rounded-md border-8 outline">
            <h1 className="text-center font-bold underline">Recent Time Trials</h1>
            <div className="grid grid-cols-1 grid-rows-auto overflow-hidden py-1 gap-y-2">
            {recentTimesCard}            
            </div>
        </div>
    )
}