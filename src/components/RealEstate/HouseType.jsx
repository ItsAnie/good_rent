import React, { useState } from "react";
import "./PropertyType/PropertyType.css"
import { useDispatch, useSelector } from "react-redux";

function HouseType(){
    const dispatch = useDispatch();
    const {houseType, status} = useSelector(stat => stat.realEstate);
    const [selected, setSelected] = useState(null);

    return(
        <div className="mt-[34px]">
            <h2 className="font-medium font-[Roboto] mb-[15px]">Тип дома</h2>
            <div className="grid grid-cols-4 gap-[22px]">
                {houseType.map((item) => (
                    <div key={item}>
                        <input 
                            id={`realEstate-${item}`}
                            name="house-type" 
                            type="radio" 
                            className="realEstate" 
                            value={item}
                            checked={selected === item}
                            onChange={() => setSelected(item)}
                        />
                        <label htmlFor={`realEstate-${item}`} className="flex items-center gap-[17px] cursor-pointer">
                            <p>{item}</p>
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

export default HouseType;