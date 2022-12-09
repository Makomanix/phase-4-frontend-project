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
        <div className="bg-slate-200 absolute bottom-[43%] left-[2%] mr-20 h-[30%] w-[30%] xl:h-[25%] xl:bottom-[48%] rounded-md border-8 outline">
        <form className="grid grid-cols-2 grid-rows-3 gap-px gap-x-2 gap-y-3 py-4 w-auto h-auto" onSubmit={handleSubmit}>
          <label className="bg-slate-400 text-center rounded-md outline">Name: </label>
          <input className="text-center rounded-md outline" name="name" type="text" placeholder="Track Name..." onChange={handleChange}></input>
          <label className="bg-slate-400 text-center rounded-md outline">Location: </label>
          <input className="text-center rounded-md outline" name="location" type="text" placeholder="Track Location..." onChange={handleChange}></input>
          <label className="bg-slate-400 text-center rounded-md outline">Length: </label>
          <input className="text-center rounded-md outline" name="length" type="string" placeholder="in km..." onChange={handleChange}></input>
            </form>
              <button className="absolute bottom-0 left-[19%] w-48 xl:left-[26%]" onClick={handleSubmit}>Add Track!</button>
        </div>
    );
}