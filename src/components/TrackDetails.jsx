import React from "react";

export default function TrackDetails ({ track, admin, removeTrack, id }) {
    if (!track) return null;

    const { name, location, length, description } = track;

    const handleDelete = () => {
        fetch(`/tracks/${track.id}`, {
            method: 'DELETE',
        }).then((res) => {
            if (res.ok) {
                removeTrack(track.id)
            }
        })
        
    }

    return (
        <div className = "grid h-screen place-items-center">
            <div className="grid grid-cols-1 grid-rows-6 w-[30%] h-[35%] mb-[6%] bg-slate-400 mx-2 rounded-xl outline pb-2">
                <div className='text-center font-bold underline'>{name}</div>
                <div className='text-center font-bold text-yellow-400'>{location}</div>
                <div className='text-center font-bold'>{length}</div>
                <div className='text-center font-bold'>{description}</div>
                {admin ? <button onClick={handleDelete}>Delete!</button> : null}
            </div>
        </div>
    );
}

