import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransport } from "../../store/slice/transportSlice";

function Transport({id, newAd}){
    const dispatch = useDispatch();
    const {transmission, drive, steeringWheel} = useSelector(state => state.transport);
    const options = id === "transmission" ? transmission : id === "drive" ? drive : id === "steeringWheel" ? steeringWheel : [];
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        dispatch(fetchTransport());
    }, [dispatch]);

    return (
        <div className="mt-[30px]">
            <h2 className={`font-medium font-[Roboto] mb-[15px] ${newAd ? "text-[#BDBDBD] font-normal" : "text-[#333333]"}`}>
                {id === "transmission" ? "Коробка передач" : id === "drive" ? "Привод" : "Руль"}
            </h2>
            <div className={`flex w-[452px] 
                    ${id === "steeringWheel" ? "justify-start gap-14" : "justify-between"}`}>
                {options.map((item) => (
                    <div key={item}>
                        <input 
                            id={`transport-${item}`}
                            name={`transport-${item}`} 
                            type="radio" 
                            className="realEstate" 
                            value={item}
                            checked={selected === item}
                            onChange={() => setSelected(item)}
                        />
                        <label htmlFor={`transport-${item}`} className="flex items-center gap-[17px] cursor-pointer">
                            <p className={`${newAd ? "font-normal" : ""}`}>{item}</p>
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

export default Transport;