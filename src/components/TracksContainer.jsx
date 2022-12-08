import React, { useState, useEffect } from "react";
import TracksCollection from "./TracksCollection";
import TrackDetails from "./TrackDetails";
import TrackForm from "./TrackForm";

export default function TracksContainer () {
    const [ tracks, setTracks ] = useState([]);
    const [ selectedTrackId, setSelectedTrackId ] = useState(null);

    useEffect(() => {
        fetch(`/tracks`)
        .then((res) => res.json())
        .then((tracks) => setTracks(tracks));
    },[setTracks])

    const addTrack = (newTrack) => {
        setTracks(tracks => [...tracks,newTrack])
    }

    const selectedTrack = tracks.find((track) => track.id === selectedTrackId)

    const handleSelectTrack = (track) => {
        setSelectedTrackId(track.id)
    }
    
    return ( 
    <div>
        <div>
        <TrackDetails track={selectedTrack} />
        </div>
        <div>
        <TrackForm addTrack={addTrack}/>
        </div>
        <div>
        <TracksCollection tracks={tracks} onClickTrack={handleSelectTrack}/>
        </div>
    </div>
    )
}