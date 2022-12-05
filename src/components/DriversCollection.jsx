import React from "react";
import Driver from "./Driver"

export default function DriversCollection ({drivers, onClickDriver}) {

    const driverCards = drivers.map((driver) => {
      return (
      <Driver 
      key={driver.id}
      id={driver.id}
      driver={driver}
      onClickDriver={onClickDriver}
      />
      )  
    })
    return (
    
    <div>
        {driverCards}
    </div>)
}