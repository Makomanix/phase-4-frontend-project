import React from "react";
import Driver from "./Driver"

export default function DriversCollection ({drivers, onClickDriver}) {

    const driverCards = drivers.map((driver) => 
      
      <Driver 
      key={driver.id}
      id={driver.id}
      driver={driver}
      onClickDriver={onClickDriver}
      /> 
    )

    return (
      <div className='absolute bottom-[10%]'>
        <div className="grid overflow-hidden xl grid-cols-5 grid-rows-2 gap-5 gap-x-5 gap-y-6 grid-flow-row w-auto h-auto">
          {driverCards}
        </div>
      </div>
    )
}