import React from "react";
import Dropdown from "../Dropdown";

function SerachDropdowns({selectedType}){
    return (
        <div className="dropdown-select flex gap-[30px] pt-[23px] items-center w-full sm:w-[531px]">
            <div className="gap-1.75 flex flex-col w-full">
                <p className="pl-[14px] text-xs font-medium font-[Roboto]">Тип объявления</p>
                <div className="relative font-[Roboto] font-medium text-xs">
                    <Dropdown id="type" />
                    <div className="absolute top-[72px] w-full z-10">
                        {selectedType?.value === "Ищут" && <Dropdown id="sub" />}
                    </div> 
                </div>
            </div>
        
            <div className="gap-1.75 flex flex-col w-full">
                <p className="pl-[14px] text-xs font-medium font-[Roboto]">Категория</p>
                <div className="relative w-full font-[Roboto] font-medium text-xs">
                    <Dropdown id="category" />
                </div>
            </div>
        </div>
    );
}

export default SerachDropdowns;