import React, {useState, useEffect} from "react";
import DriverCollection from "./DriversCollection"
import DriverDetails from "./DriverDetails"

// const API = "http://localhost:3000"

export default function DriversContainer ({API}) {
    const [ drivers, setDrivers ] = useState([])
    const [ selectedDriverId, setSelectedDriverId ] = useState(null)


    useEffect(() => {
        fetch(`/drivers`)
        .then((res) => res.json())
        .then((drivers) => setDrivers(drivers));
    },[setDrivers])

    const selectedDriver = drivers.find((driver) => driver.id === selectedDriverId)

    const handleSelectDriver = (driver) => {
        setSelectedDriverId(driver.id)
    }

    return (
        <div>
            <div>
                <DriverDetails driver={selectedDriver}/>
            </div>
            <div>
                <DriverCollection drivers={drivers} onClickDriver={handleSelectDriver}/>
            </div>
        </div>
    )
}