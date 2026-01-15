import React from "react";
import Dropdown from "../Dropdown";

function SerachDropdowns({selectedType}){
    return (
        <div className="dropdown-select flex gap-[30px] pt-[23px] items-center w-full">
            <div className="gap-1.75 flex flex-col w-full">
                <p className="pl-[14px] text-xs font-medium font-[Roboto]">Тип объявления</p>
                <div className="relative min-w-[222px] font-[Roboto] font-medium text-xs">
                    <Dropdown id="type" />
                    <div className="absolute top-[72px] w-full z-10">
                        {selectedType?.value === "Ищут" && <Dropdown id="sub" />}
                    </div> 
                </div>
            </div>
        
            <div className="gap-1.75 flex flex-col w-full">
                <p className="pl-[14px] text-xs font-medium font-[Roboto]">Категория</p>
                <div className="relative min-w-[222px] w-full font-[Roboto] font-medium text-xs">
                    <Dropdown id="category" />
                </div>
            </div>
        
            <button 
                className="lg:block hidden shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] text-white font-normal bg-[#27AE60] rounded-[25px] 
                        w-[228px] h-[50px] text-sm cursor-pointer mt-[23px]"
                onClick={() => handleApplyFilter(true)}>
                Искать
            </button>
        </div>
    );
}

export default SerachDropdowns;