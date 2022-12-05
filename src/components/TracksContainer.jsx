import React, {useState, useEffect} from "react";
import TracksCollection from "./TracksCollection";
import TrackDetails from "./TrackDetails";
import TrackForm from "./TrackForm";

const API = "http://localhost:3000"

export default function TracksContainer () {
    const [ tracks, setTracks ] = useState([])
    const [ selectedTrackId, setSelectedTrackId ] = useState(null)

    useEffect(() => {
        fetch(`${API}/tracks`)
        .then((res) => res.json())
        .then((tracks) => setTracks(tracks));
    },[tracks])

    const selectedTrack = tracks.find((track) => track.id === selectedTrackId)
    
    return ( 
    <div>
        {/* hide TrackDetails until a track is selected  */}
        <TrackDetails track={selectedTrack} />
        {/* TrackForm only visible to Admin so ternary is needed */}
        <TrackForm />
        <TracksCollection tracks={tracks} onClickTrack={setSelectedTrackId}/>
    </div>
    )
}