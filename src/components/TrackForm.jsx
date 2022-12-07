import React, {useState} from "react";

const emptyForm = {
    name: "",
    location: "",
    length: "",
    year_of_construction: "",
    history: ""
  }

export default function TrackForm ({addTrack}) {

    const [formData, setFormData] = useState(emptyForm)

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
        <div>
            
        </div>
    )
}