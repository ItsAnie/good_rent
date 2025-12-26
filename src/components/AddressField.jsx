import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToggle } from "../hooks/useToggle";
import { updateUserProfile } from "../store/slice/profileSlice";

function AddressField({newAd, formData, setFormData}) {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.data);
    const [isMapOpen, toggleMap] = useToggle(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            location: e.target.value
        }));
    };

    return (
        <div className={`flex flex-col gap-[8px] ${newAd ? "mt-[61px]" : ""}`}>
            <label htmlFor="address" className="ml-[21px] text-[#BDBDBD]">Адрес</label>
            <div className="flex gap-[17px]">
                <input
                    id="address"
                    type="text"
                    value={profile.location || ""}
                    onChange={handleChange}
                    className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                />
                <div 
                    onClick={toggleMap}
                    className="flex items-center gap-[18px] cursor-pointer"
                >
                    <img src="/images/placeholder1.png" alt="location" className="w-[25px] h-[30px] "/>
                    <p className="text-base text-[#27AE60] font-normal">Указать на карте</p>
                </div>
            </div>

            {isMapOpen && (
                <div className="mt-[39px] mb-[32px]">
                    <img alt="Map" src="./images/Map.png"></img>
                </div>
            )}
        </div>
    );
}

export default AddressField;
