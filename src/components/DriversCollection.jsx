import React from "react";
import Driver from "./Driver"

export default function DriversCollection ({ drivers, onClickDriver, searchQuery, setSearchQuery }) {

    const driverCards = drivers.map((driver) =>      
      <Driver 
        key={driver.id}
        id={driver.id}
        driver={driver}
        onClickDriver={onClickDriver}
      /> 
    );

    const handleOnChange = (e) => setSearchQuery(e.target.value);

    return (
      <div className="absolute inset-x-0 bottom-36 h-12">
        <div className="grid grid-cols-5 grid-rows-auto py-1 gap-y-3">
        {/* <input 
              type="text" 
              placeholder="search..." 
              onChange={handleOnChange}
              value={searchQuery} 
            /> */}
          {driverCards}
        </div>
      </div>
    );
}