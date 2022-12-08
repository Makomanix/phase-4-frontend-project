import React from 'react'

export default function TimeTrial({ time_trial }) {
  const { date, Lap_Time, track_id } = time_trial;

  return (
    <div>
        {date}
        {Lap_Time}
        {track_id}
    </div>
  );
}
