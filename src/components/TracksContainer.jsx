import React, { useState, useEffect } from "react";
import TracksCollection from "./TracksCollection";
import TrackDetails from "./TrackDetails";
import TrackForm from "./TrackForm";
import { useNavigate } from "react-router-dom"

export default function TracksContainer () {
    const [ tracks, setTracks ] = useState([]);
    const [ selectedTrackId, setSelectedTrackId ] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const currentDriver = sessionStorage.getItem("user_id")
      if (currentDriver == null){
          navigate("/login")
      }else{
        fetch(`/tracks`)
        .then((res) => res.json())
        .then((tracks) => setTracks(tracks));
      }
    },[setTracks]);

    const addTrack = (newTrack) => {
        setTracks(tracks => [...tracks,newTrack])
    }

    const selectedTrack = tracks.find((track) => track.id === selectedTrackId)

    const handleSelectTrack = (track) => {
        setSelectedTrackId(track.id)
    }

    const tracksToDisplay = tracks.filter((track) => 
          track.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return ( 
    <div>
        <div>
          <TrackDetails track={selectedTrack} />
        </div>
        <div>
          <TrackForm addTrack={addTrack}/>
        </div>
        <div>
          <TracksCollection 
            tracks={tracks}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery} 
            onClickTrack={handleSelectTrack}
          />
        </div>
    </div>
    );
}