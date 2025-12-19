import React, { useEffect, useState } from "react";
import "./PropertyType/PropertyType.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstate } from "../../store/slice/realEstateSlice";

function Repair(){
    const dispatch = useDispatch();
    const {repair, status} = useSelector(state => state.realEstate);
    const [selected, setSelected] = useState(null);
    
    useEffect(() => {
        if (status === "idle"){
            dispatch(fetchRealEstate());
        }
    }, [dispatch, status]);
    return(
        <div className="mt-[26px]">
            <h2 className="font-medium font-[Roboto] mb-[15px]">Ремонт</h2>
            <div className="grid grid-cols-4">
                {repair.map((item) => (
                    <div key={item}>
                        <input 
                            id={`realEstate-${item}`}
                            name="repair" 
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

export default Repair;