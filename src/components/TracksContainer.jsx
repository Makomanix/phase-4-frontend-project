import React, { useState, useEffect } from "react";
import TracksCollection from "./TracksCollection";
import TrackDetails from "./TrackDetails";
import TrackForm from "./TrackForm";

export default function TracksContainer () {
    const [ userAdmin, setUserAdmin ] = useState([])
    const [ tracks, setTracks ] = useState([]);
    const [ selectedTrackId, setSelectedTrackId ] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const {admin, id} = userAdmin

    useEffect(() => {
        fetch(`/tracks`)
        .then((res) => res.json())
        .then((tracks) => setTracks(tracks));
    },[setTracks]);

    useEffect(() => {
      const currentDriver = sessionStorage.getItem("user_id")
      if (currentDriver == null){
          navigate("/login")
      }else{
          fetch(`/drivers/${currentDriver}`)
          .then((res) => res.json())
          .then((user) => setUserAdmin(user))
      }
  },[]);

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

    const removeTrack = (id) => {
      fetch(`/tracks/${id}`, {
        method: "DELETE"
      })
      const newTracks = tracks.filter((track) => track.id !== id)
        setTracks(newTracks)
    }

    return ( 
    <div>
        <div>
          <TrackDetails track={selectedTrack} admin={admin} id={id} removeTrack={removeTrack}/>
        </div>
        <div>
          {admin ? <TrackForm addTrack={addTrack}/> : <></>}
          {/* <TrackForm addTrack={addTrack}/> */}
          {/* {admin} */}
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