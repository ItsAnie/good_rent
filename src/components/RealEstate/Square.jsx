import React from "react";

function Square({newAd}){
    return (
        <div className="mt-[26px] -mr-[56px]">
            <h2 className={`font-medium font-[Roboto] mb-[10px] ml-[25px] ${newAd ? "text-[#BDBDBD] font-normal" : "transparent"}`}>Площадь</h2>
            <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[12px]">
                    {!newAd && <p>От</p>}
                    <input
                        type="text"
                        className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />
                </div>
                {!newAd && <p>До</p>}
                <div className="flex items-center gap-[15px]">
                    {!newAd && 
                    <input
                        type="text"
                        className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />}
                    <p className="font-normal">кв.М.</p>
                </div>
            </div>
        </div>
    );
}

export default Square;