import React from "react";

export default function TrackDetails ({ track, admin, removeTrack, id }) {
    if (!track) return null;

    const { name, location, length, year_of_construction, history } = track;

    const handleDelete = (e) => {
        fetch(`/tracks/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                removeTrack(id)
            }
        })
        
    }

    return (
        <div className = "grid h-screen place-items-center">
            <div className="grid grid-cols-1 grid-rows-6 w-72 h-52 mb-32 bg-slate-400 mx-2 rounded-xl outline pb-2">
                <div className='text-center font-bold'>{name}</div>
                <div className='text-center font-bold text-yellow-400'>{location}</div>
                <div className='text-center font-bold'>{length}</div>
                <div className='text-center font-bold'>{year_of_construction}</div>
                <div className='text-center font-bold'>{history}</div>
                {admin ? <button onClick={handleDelete}>Delete!</button> : <></>}
            </div>
        </div>
    );
}

