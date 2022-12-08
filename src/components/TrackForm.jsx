import React, { useState } from "react";

const emptyForm = {
    name: "",
    location: "",
    length: "",
    year_of_construction: "",
    history: ""
  }

export default function TrackForm ({ addTrack }) {
    const [ formData, setFormData ] = useState(emptyForm);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`/tracks`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({...formData})
      })
      .then((r) => r.json())
      .then((newTrack) => {
        addTrack(newTrack)
    });
      setFormData(emptyForm)
    }
    
    return (
        <div className="bg-slate-200 absolute bottom-[5%] left-[3%] mr-20 h-[48%] w-[30%] rounded-md border-8 outline">
            <form onSubmit={handleSubmit}>
              <label>Name: </label>
              <input name="name" type="text" placeholder="Track Name" onChange={handleChange}></input>
              <label>Location: </label>
              <input name="location" type="text" placeholder="Track Location" onChange={handleChange}></input>
              <label>Length: </label>
              <input name="Track Length" type="text" placeholder="in km" onChange={handleChange}></input>
              <button>Add Track!</button>
            </form>
        </div>
    );
}