import React, {useState, useEffect} from "react";
import "./PropertyType/PropertyType.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstate, setSelectedMainFilter } from "../../store/slice/realEstateSlice";

function RealEstate({onMoreFilters, newAd}){
    const dispatch = useDispatch();
    const {mainFilters, status} = useSelector(state => state.realEstate);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRealEstate());
        }
    }, [dispatch, status]);

    const handleChange = (filter) => {
        setSelected(filter);
        dispatch(setSelectedMainFilter(filter));
    }
    
    return(
        <div className={`flex items-center ${!newAd ? "justify-end" : ""} gap-[30px] text-[#333333] text-lg font-normal`}>
            {mainFilters.map((filter) => (
                <div key={filter}>
                    <input 
                        id={`realEstate-${filter}`}
                        name="selected-realEstate" 
                        type="radio" 
                        className="realEstate" 
                        value={filter}
                        checked={selected === filter}
                        onChange={() => handleChange(filter)}
                    />
                    <label htmlFor={`realEstate-${filter}`} className="flex gap-[15px] items-center">
                        <p>{filter}</p>
                        <span className="radio-unchecked cursor-pointer">
                            <span className="radio-checked"></span>
                        </span>
                    </label>
                </div>
            ))}

            {!newAd && (
                <button
                    onClick={onMoreFilters}
                    className="shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] bg-[#27AE60] w-[228px] h-[50px] rounded-[25px] text-white text-sm cursor-pointer"
                >
                    Больше фильтров
                </button>
            )}
        </div>
    );
}

export default RealEstate;