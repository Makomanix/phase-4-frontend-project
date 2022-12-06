import React, {useState, useEffect} from "react";

// const API = "http://localhost:3000"

export default function UserLeaderboard ({API}) {
    const [drivers, setDrivers] = useState([])
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

    useEffect(() => {
        fetch(`${API}/drivers`)
        .then((res) => res.json())
        .then((drivers) => setDrivers(drivers));
    },[])

    const recentDrivers = drivers.sort().slice(0,10)

    //make dropdown to select track then have component filter times by order from lowest to highest

    return (
    <div>
        <button></button>
        {/* {display ? <TopTimes tracks={tracks}/> : <RecentTimes drivers={drivers}/> } */}
    </div>
    )
}