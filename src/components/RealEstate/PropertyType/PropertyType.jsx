import React, { useEffect, useState } from "react";
import "./PropertyType.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstate } from "../../../store/slice/realEstateSlice";

function PropertyType({ newAd }) {
    const dispatch = useDispatch();
    const { residential, commercial, selectedMainFilter, status } = useSelector(state => state.realEstate);
    const [selected, setSelected] = useState(null);

    const isCommercialGrid = newAd && selectedMainFilter === "Коммерческая";

    const filtersToShow =
        !selectedMainFilter || selectedMainFilter === "Жилая"
            ? residential
            : commercial;

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRealEstate());
        }
    }, [dispatch, status]);

    return (
        <div className="text-[#333333] max-w-[1085px]">
            <h2
                className={`font-medium font-[Roboto] mb-[15px] 
                ${newAd ? "text-[#BDBDBD] font-normal text-base" : ""}`}
            >
                Тип недвижимости
            </h2>

            <div
                className={
                    isCommercialGrid
                        ? "grid grid-cols-3 gap-y-[22px] gap-x-[20px]"
                        : "flex flex-wrap gap-y-[22px]"
                }
            >
                {filtersToShow.map((filter, idx) => {
                    let customGrid = "";
                    if (isCommercialGrid) {
                        if (idx === 4) customGrid = "col-span-2"; 
                        if (idx === 5) customGrid = "col-span-3"; 
                    }

                    return (
                        <div
                            key={filter}
                            className={
                                isCommercialGrid
                                    ? `flex items-center ${customGrid}`
                                    : `flex items-center ${newAd ? "w-1/3" : "w-1/4"}`
                            }
                        >
                            <input
                                id={`residential-${filter}`}
                                name="property-type"
                                type="radio"
                                className="realEstate"
                                value={filter}
                                checked={selected === filter}
                                onChange={() => setSelected(filter)}
                            />
                            <label
                                htmlFor={`residential-${filter}`}
                                className="flex items-center gap-[17px] cursor-pointer"
                            >
                                <p className="truncate font-normal">{filter}</p>
                                <span className="radio-unchecked">
                                    <span className="radio-checked"></span>
                                </span>
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default PropertyType;
