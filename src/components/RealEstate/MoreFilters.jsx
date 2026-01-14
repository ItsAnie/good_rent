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
import Transport from "../Transport/Transport";
import TransportDropdown from "../Transport/TransportDropdown/TransportDropdown";

function MoreFilters({selectedCategory, onClose}){
    const {selectedMainFilter} = useSelector(state => state.realEstate);
    const { selectedPropertyType } = useSelector(state => state.realEstate);

    return(
        <div className="flex flex-col items-center w-[1520px] bg-gradient-to-b 
                        from-[#3CC742] to-[#C2FFC5] mx-auto h-auto rounded-[20px]
                        absolute left-1/2 -translate-x-1/2 top-full -mt-[170px] max-h-[1038px] min-h-[639px] pb-[55px]">
            <div className="max-w-full h-full flex flex-col text-[#333333] text-lg mt-[190px]">
                <PropertyType 
                    selectedCategory={selectedCategory} 
                    selectedValue={selectedPropertyType}
                />

                <div className="flex justify-between w-full items-center">
                    <Price />
                    {selectedPropertyType !== "Водный транспорт" 
                        ? <Square selectedCategory={selectedCategory} /> 
                        : <YearConstruction selectedCategory={selectedCategory} />}
                </div>

                {!(selectedMainFilter === "Жилая" || selectedMainFilter === "Коммерческая" || selectedCategory?.value === "Транспорт") && (
                    <div>
                        <Repair />
                        <Bathroom />
                        <HouseType />
                    </div>
                )}

                <div className="flex justify-between w-full items-center">
                    {selectedPropertyType !== "Водный транспорт" && <YearConstruction selectedCategory={selectedCategory} />}
                    {(selectedCategory?.value === "Транспорт" && selectedPropertyType === "Автомобиль легковой") && (
                        <Transport id="transmission" />
                    )}
                    {selectedCategory?.value === "Недвижимость" && <Floor />}
                </div>

                {(selectedCategory?.value === "Транспорт" && selectedPropertyType === "Автомобиль легковой") && (
                    <div>
                        <div className="flex justify-between w-full items-center">
                            <Transport id="drive" />
                            <Transport id="steeringWheel" />
                        </div> 
                        <div className="flex justify-between w-[780px] items-center">
                            <TransportDropdown id="brand" />
                            <TransportDropdown id="color" />
                        </div> 
                    </div>                       
                )}

                {(selectedPropertyType === "Мотоцикл/мототехника" && selectedPropertyType !== "Водный транспорт") && (
                    <div className="flex justify-between w-[780px] items-center">
                        <TransportDropdown id="brand" />
                        <TransportDropdown id="color" />
                    </div> 
                )}

                {selectedMainFilter === "Жилая" && (<Rooms />)}
            </div>
             <div className="flex justify-end w-full pr-[63px] mt-[48px]">
                <button 
                    onClick={onClose}
                    className="bg-[#27AE60] w-[228px] h-[50px] rounded-[25px] cursor-pointer text-white text-sm"
                >
                    Применить
                </button>
            </div>
        </div>
    );
}

export default MoreFilters;