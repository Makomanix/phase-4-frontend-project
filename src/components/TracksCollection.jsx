import React from "react";
import Track from "./Track";

export default function TracksCollection ({ tracks, onClickTrack, searchQuery, setSearchQuery }) {

    const trackCards = tracks.map((track) => 
      <Track 
        key={track.id}
        id={track.id}
        track={track}
        onClickTrack={onClickTrack}
      />
    );

    const handleOnChange = (e) => setSearchQuery(e.target.value);

    return (
        <div className="absolute inset-x-0 bottom-36 h-12">
            <div className = "grid grid-cols-3 grid-rows-auto py-1 gap-y-3">
            {/* <input 
                  type="text" 
                  placeholder="search..." 
                  onChange={handleOnChange}
                  value={searchQuery} 
                /> */}
                {trackCards}
            </div>
        </div>
    );
}