import React, {useState, useEffect} from "react";
import DriverCollection from "./DriversCollection"
import DriverDetails from "./DriverDetails"

// const API = "http://localhost:3000"

export default function DriversContainer ({API}) {
    const [ drivers, setDrivers ] = useState([])
    const [ selectedDriverId, setSelectedDriverId ] = useState(null)


    useEffect(() => {
        fetch(`${API}/drivers`)
        .then((res) => res.json())
        .then((drivers) => setDrivers(drivers));
    },[drivers])

    const selectedDriver = drivers.find((driver) => driver.id === selectedDriverId)


    return (
        <div>
            {/* hide details component until a driver is selected from the collection */}
            <DriverDetails driver={selectedDriver}/>
            <DriverCollection drivers={drivers} onClickDriver={setSelectedDriverId}/>
        </div>
    )
}