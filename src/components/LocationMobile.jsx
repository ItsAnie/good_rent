import React from "react";
import Search from "./Search/Search";

function LocationMobile(){
    return (
        <div>
            <Search />
            <div className="w-full h-full z-10 -mt-[90px]">
                <img src="/images/Map.png" className="w-full object-cover h-screen" />
            </div>
        </div>
    )
}

export default LocationMobile;