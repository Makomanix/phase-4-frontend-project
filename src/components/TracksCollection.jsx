import React from "react";
import Track from "./Track";

export default function TracksCollection ({tracks, onClickTrack}) {

    const trackCards = tracks.map((track) => {
        <Track 
        key={track.id}
        id={track.id}
        track={track}
        onClickTrack={onClickTrack}
        />
    })
    return (
        <div>
            {trackCards}
        </div>
    )
}