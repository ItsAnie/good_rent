import React, { useState } from "react";
import "./PropertyType/PropertyType.css"

function Rooms({newAd}){
    const roomsNumber = ["Студия", 1, 2, 3, 4, "4+"]
    const [selected, setSelected] = useState(null);

    return (
        <div className= "mt-[35px] text-[#333333] text-lg">
            <h2 className={`font-medium ${newAd ? "text-[#BDBDBD] font-normal text-base" : "transparent"}`}>Количество комнат</h2>
            <div className="flex items-center gap-[32px] mt-[15px]"> 

                {roomsNumber.map((item) => (
                    <div key={item} className="flex items-center">
                        <input 
                            id={`number-${item}`}
                            name="rooms" 
                            type="radio" 
                            className="realEstate"
                            checked={selected === item}
                            value={item}
                            onChange={() => setSelected(item)}
                        />
                        <label htmlFor={`number-${item}`} className="flex items-center gap-[15px] cursor-pointer">
                            <p className="truncate font-normal">{item}</p>
                            <span className="radio-unchecked">
                                <span className="radio-checked"></span>
                            </span>
                        </label>
                    </div> 
                ))} 
            </div>
        </div>
    );
}

export default Rooms;