import React from "react";

function Price(){
    return(
        <div className="mt-[26px]">
            <h2 className="font-medium font-[Roboto] mb-[10px]">Цена</h2>
            <div className="flex items-center gap-[15px] ml-[-34px]">
                <div className="flex items-center gap-[12px]">
                    <p>От</p>
                    <input 
                        type="text" 
                         className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />
                </div>
                <p>До</p>
                <div className="flex items-center gap-[15px]">
                    <input 
                        type="text" 
                        className="bg-[#F6F6F6] w-[180px] h-[50px] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none pl-[8px]"
                    />
                    <p>Руб.</p>
                </div>
            </div>
        </div>
    );
}

export default Price;