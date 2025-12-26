import React from "react";

function Square({newAd, selectedCategory}){
    return (
        <div className={`mt-[26px] ${selectedCategory?.value !== "Транспорт" ? "-mr-[56px]" : ""}`}>
            <h2 className={`font-medium font-[Roboto] mb-[10px] ml-[25px] ${newAd ? "text-[#BDBDBD]" : "text-[#333333]"}`}>
                {selectedCategory?.value === "Транспорт" ? "Пробег" : "Площадь"}
            </h2>
            <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[12px]">
                    {!newAd && <p>От</p>}
                    <input
                        id="square-from"
                        type="text"
                        className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />
                </div>
                {!newAd && <p>До</p>}
                <div className="flex items-center gap-[15px]">
                    {!newAd && 
                    <input
                        id="square-to"
                        type="text"
                        className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />}
                    <p className="font-normal">
                        {selectedCategory?.value === "Транспорт" ? "кв" : "кв.М."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Square;