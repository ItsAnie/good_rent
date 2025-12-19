import React from "react";
import PropertyType from "./PropertyType/PropertyType";
import Price from "./Price";
import Square from "./Square";
import Repair from "./Repair";
import Bathroom from "./Bathroom";
import HouseType from "./HouseType";
import YearConstruction from "./YearConstruction";
import Floor from "./Floor";
import { useSelector } from "react-redux";
import Rooms from "./Rooms";

function MoreFilters({selectedCategory}){
    const {selectedMainFilter} = useSelector(state => state.realEstate);
    const containerHeight = selectedMainFilter
        ? "min-h-[753px]"
        : "min-h-[1038px]";
        
    const containerClass =
        selectedMainFilter === "Жилая"
            ? "justify-end pb-[60px]"
            : "justify-center";

    const mtMap = {
        "Жилая": "-mt-[230px]",
        "Коммерческая": "-mt-[210px]"
    };

    const mtClass = mtMap[selectedMainFilter] || "-mt-[170px]";

    return(
        <div className={`flex flex-col items-center w-[1520px] bg-gradient-to-b 
                        from-[#3CC742] to-[#C2FFC5] mx-auto h-auto rounded-[20px]
                        absolute left-1/2 -translate-x-1/2 top-full  -mt-[170px] ${containerClass} ${containerHeight} ${mtClass}`}>
            <div className="max-w-full h-full flex flex-col text-[#333333] text-lg mt-[30px]">
                <PropertyType />

                <div className="flex justify-between w-full items-center">
                    <Price />
                    <Square />
                </div>

                {!(selectedMainFilter === "Жилая" || selectedMainFilter === "Коммерческая") && (
                    <div>
                        <Repair />
                        <Bathroom />
                        <HouseType />
                    </div>
                )}

                <div className="flex justify-between w-full items-center">
                    <YearConstruction />
                    <Floor />
                </div>

                {selectedMainFilter === "Жилая" && (<Rooms />)}

                <button className="bg-[#27AE60] w-[228px] h-[50px] rounded-[25px] cursor-pointer text-white text-sm absolute bottom-[49px] right-[63px]">Применить</button>
            </div>
        </div>
    );
}

export default MoreFilters;