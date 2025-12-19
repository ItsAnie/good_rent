import React from "react";

function Floor({newAd}){
    return(
        <div className="mt-[30px]">
            <h2 className={`font-medium font-[Roboto] mb-[10px] ${newAd ? "ml-[20px] font-normal" : "ml-[25px]"}`}>Этаж</h2>
            <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[12px]">
                    {!newAd && <p>От</p>}
                    <input 
                        type="text" 
                        className="bg-[#F6F6F6] text-black font-normal w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />
                </div>
                {!newAd && (
                    <div className="flex items-center gap-[15px]">
                        <p>До</p>
                        <input 
                            type="text" 
                            className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Floor;