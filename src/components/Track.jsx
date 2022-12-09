import React from "react";

export default function Track ({ track, onClickTrack }) {
    const { name, location, length, year_of_construction, history } = track;
    
    const handleClick = () => {
        onClickTrack(track);
    }

    return (
        <div className="grid grid-cols-1 grid-rows-3 w-auto h-auto bg-slate-400 mx-2 rounded-xl outline pb-2">
            <div className='text-center font-bold underline'>{name}</div>
            <div className='text-center font-bold text-yellow-400'>{location}</div>
            <div className="hidden">
                {length}
                {year_of_construction}
                {history}
            </div>
            <button className='text-center font-semibold mx-4' onClick={handleClick}>Details</button>
        </div>
    );
}