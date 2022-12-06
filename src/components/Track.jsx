import React from "react";

export default function Track ({id, track, onClickTrack}) {
    const { name, location, length, year_of_construction, history } = track;
    
    const handleClick = () => {
        onClickTrack(track);
    }

    return (
    <div>
        {name}
        {location}
        {length}
        {year_of_construction}
        {history}
        <button onClick={handleClick}/>
    </div>
    )
}