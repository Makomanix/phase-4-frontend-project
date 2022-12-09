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
        <div className="absolute left-[0%] bottom-[0%] overflow-auto h-[37%] w-full py-2">
            <div className = "grid grid-cols-3 grid-rows-auto px-2 py-1 gap-y-3">
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