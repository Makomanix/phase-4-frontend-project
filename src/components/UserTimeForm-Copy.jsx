// import React from "react";

// export default function UserTimeForm ({ user, updateTImes }) {
//     const [ formData, setFormData ] = useState("");
//     const { time_trials, id } = user;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newTime = {
//             track_id: formData.track_id,
//             driver_id: id,
//             Lap_Time: formData.Lap_Time,
//             date: formData.date
//         }
//         fetch('/time_trials', {
//             method: 'POST',
//             headers: {
//                 "Accept": "application/json",
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(newTime)
//         })
//         .then((res) => res.json())
//         .then(data => updateTimes(data))
//     }
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData, [name]: value
//         })
//     }

//     const handleSelect = (e) => {
//         const {name, value} = e.target
//         setFormData({
//             ...formData, [name]: parseInt(value),
//         })
//     }

//     return(
//     <div>
//              <form onSubmit={handleSubmit}>
//                 {/* <label>name</label>
//                 <input name="driver_id" type="text"></input> */}
//                 <label>Date</label> 
//                 <input name="date" placeholder="YYYY-MM-DD" type="text" onChange={handleChange}></input>
//                 <label>Track</label>
//                 <select name="track_id" onChange={handleSelect}>
//                     <option>Select Track</option>
//                     <option value="1">Rainbow Road</option>
//                     <option value="2">Koopa Troopa Beach</option>
//                     <option value="3">DK Summit</option>
//                 </select>
//                 <label>Lap Time</label>
//                 <input name="Lap_Time" placeholder="time here" type="text" onChange={handleChange}></input>
//                 <button >Add Time</button>
//             </form>
//     </div>
//   );
// }