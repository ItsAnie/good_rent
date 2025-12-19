import React, {useState} from "react";
import "./Rent.css"

function Rent({formData, setFormData}){
    const [openRentalPeriod, setOpenRentalPeriod] = useState(null);

    const handleSelect = (field, value) => {
        setFormData({...formData, [field]: value});
        setOpenRentalPeriod(null);
    }

    return (
        <div>
            <div className="grid grid-flow-col grid-rows-3 gap-y-[39px] text-[#BDBDBD] font-[Roboto] font-medium">
                <div className="w-[222px] relative">
                    <p className="ml-[19px] ">Мин. срок аренды</p>
                    <div className="relative">
                        <div 
                            className="flex items-center bg-[#F6F6F6] w-full h-[50px] rounded-[19px] text-sm font-normal pl-[20px] 
                                    py-[17px] mt-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] relative z-20 cursor-pointer"
                            onClick={() => setOpenRentalPeriod(prev => (prev === 'min' ? null : 'min'))}
                        >
                            <p className={`w-[157px] ${ formData.rentMin ? "text-black" : "text-[#BDBDBD]"}`}>
                                {formData.rentMin || "Мин. срок"}
                            </p>
                            <img src="/images/arrow.png" className="relative top-0 left-[17px] w-[11px] h-[6px]" />
                        </div>

                        {openRentalPeriod === "min" && (
                        <ul className="flex flex-col gap-[16px] w-full bg-[#F6F6F6] pt-[65px] rounded-[19px] z-10 absolute top-0 left-0 pl-[20px] text-sm text-black font-normal pb-[14px]">
                            {["1 день", "1 неделя", "1 месяц", "1 год"].map((item) => (
                                <li 
                                    key={item} 
                                    onClick={() => handleSelect('rentMin', item)}
                                    className="cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price" className="ml-[18px]">Стоимость (руб.)</label>
                    <input 
                        type="text" 
                        id="price" 
                        placeholder="Стоимость" 
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        className="w-[286px] h-[50px] bg-[#F6F6F6] text-black placeholder-[#BDBDBD] rounded-[19px] text-sm font-normal pl-[19.8px] 
                                   mt-[8px] focus:outline-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="deposit" className="ml-[18px]">Залог (руб.)</label>
                    <input 
                        type="text" 
                        id="deposit" 
                        placeholder="Залог" 
                        value={formData.deposit}
                        onChange={(e) => setFormData({...formData, deposit: e.target.value})}
                        className="w-[286px] h-[50px] bg-[#F6F6F6] text-black placeholder-[#BDBDBD] rounded-[19px] text-sm font-normal pl-[19.8px] 
                                   mt-[8px] focus:outline-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
                    />
                </div>

                <div className="w-[222px] relative justify-self-end">
                    <p className="ml-[19px] ">Макс. срок аренды</p>
                    <div className="relative">
                        <div 
                            className="flex items-center bg-[#F6F6F6] w-full h-[50px] rounded-[19px] text-sm font-normal pl-[20px] 
                                    py-[17px] mt-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] relative z-40 cursor-pointer"
                            onClick={() => setOpenRentalPeriod(prev => (prev === 'max' ? null : 'max'))}
                        >
                            <p className={`w-[157px] ${ formData.rentMax ? "text-black" : "text-[#BDBDBD]"}`}>
                                {formData.rentMax || "Макс. срок"}
                            </p>
                            <img src="/images/arrow.png" className="relative top-0 left-[17px] w-[11px] h-[6px]" />
                        </div>

                        {openRentalPeriod === "max" && (
                        <ul className="flex flex-col gap-[16px] w-full bg-[#F6F6F6] pt-[65px] rounded-[19px] z-30 absolute top-0 left-0 pl-[20px] text-sm text-black font-normal pb-[14px]">
                            {["1 день", "1 неделя", "1 месяц", "1 год"].map((item) => (
                                <li 
                                    key={item} 
                                    onClick={() => handleSelect('rentMax', item)}
                                    className="cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>

                <div className="justify-self-end">
                    <p className="invisible">day</p>
                    <div className="relative">
                        <div 
                            className="w-[161px] h-[50px] rounded-[19px] pl-[20px] py-[17px] bg-[#F6F6F6] text-sm text-[#333333] font-normal 
                                    flex items-center mt-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] relative z-20 cursor-pointer"
                            onClick={() => setOpenRentalPeriod(prev => (prev === 'day' ? null : 'day'))}
                        >
                            <p className="w-[94px]">{formData.rentDay ||"В день"}</p>
                            <img src="/images/arrow.png" className="relative top-0 left-[19px] w-[11px] h-[6px]" />
                        </div>

                        {openRentalPeriod === "day" && (
                        <ul className="flex flex-col gap-[16px] w-full bg-[#F6F6F6] pt-[65px] rounded-[19px] z-10 absolute top-0 left-0 pl-[20px] text-sm text-black font-normal pb-[14px]">
                            {["В день", "В неделю", "В месяц", "В год"].map((item) => (
                                <li
                                    key={item} 
                                    onClick={() => handleSelect('rentDay', item)}
                                    className="cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>

                <label htmlFor="no_deposit" className="flex items-center cursor-pointer mt-[27px] justify-self-end">
                    Без залога
                    <input type="radio" id="no_deposit" className="per-day-input hidden" />
                    <span className="border-2 border-white rounded-full ml-2"></span>
                </label>
            </div>
        </div>
    );
}

export default Rent;