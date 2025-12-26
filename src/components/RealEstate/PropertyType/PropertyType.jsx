import React, { useEffect, useState } from "react";
import "./PropertyType.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstate } from "../../../store/slice/realEstateSlice";
import { fetchTransport } from "../../../store/slice/transportSlice";
import { setSelectedPropertyType } from "../../../store/slice/realEstateSlice";

function PropertyType({ newAd, selectedCategory, selectedValue }) {
    const dispatch = useDispatch();
    const { residential, commercial, selectedMainFilter, status } = useSelector(state => state.realEstate);
    const {typeTransport} = useSelector(state => state.transport);

    const isCommercialGrid = newAd && selectedMainFilter === "Коммерческая";

    let filtersToShow;

    if (selectedCategory?.value === "Транспорт") {
        filtersToShow = typeTransport;
    } else if (!selectedMainFilter || selectedMainFilter === "Жилая") {
        filtersToShow = residential;
    } else if (selectedMainFilter === "Коммерческая") {
        filtersToShow = commercial;
    }
    
    console.log("selected category", selectedCategory)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchRealEstate());
        }
    }, [dispatch, status]);

    useEffect(() => {
        dispatch(fetchTransport());
    }, [dispatch]);


    return (
        <div className={`text-[#333333] max-w-[1085px]`}>
            <h2
                className={`font-medium font-[Roboto] mb-[15px] 
                ${newAd ? "font-normal text-[#BDBDBD]" : ""}`}
            >
                {selectedCategory?.value === "Транспорт" ? "Тип транспорта" : "Тип недвижимости"}
            </h2>

            <div
                className={
                    `${isCommercialGrid
                        ? "grid grid-cols-3 gap-y-[22px] gap-x-[20px]"
                        : "flex flex-wrap gap-y-[22px]"
                    }
                    ${newAd && selectedCategory?.value === "Транспорт" ? "grid grid-cols-2 gap-x-17" : ""}
                `}
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
                                checked={selectedValue === filter}
                                onChange={() => dispatch(setSelectedPropertyType(filter))}
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
