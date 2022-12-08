import React, {useState, useEffect} from "react";
import DriverCollection from "./DriversCollection"
import DriverDetails from "./DriverDetails"


export default function DriversContainer () {
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
            <button className="absolute top-4 left-[12%] h-8 w-20 z-40 ">Tracks</button>
            <button className="absolute top-4 left-[20%] h-8 w-20 z-40 ">Profile</button>
        <div>
                <DriverDetails driver={selectedDriver}/>
                <DriverCollection drivers={drivers} onClickDriver={handleSelectDriver}/>
        </div>
        </div>
    )
}