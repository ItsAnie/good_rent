import React from "react";

function SocialData({ formData, setFormData }){
    return (
        <div className="flex flex-col text-base text-[#BDBDBD] font-medium font-[Roboto] gap-[24px]">
                        <div className="flex flex-col gap-[8px]">  
                            <label htmlFor="insta" className="ml-[21px]">Instagram</label>
                            <input
                                id="insta"
                                type="text"
                                value={formData.instagram}
                                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="fb" className="ml-[21px]">Facebook</label>
                            <input 
                                id="fb"
                                type="text"
                                value={formData.facebook}
                                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="tel" className="ml-[21px]">Telegram</label>
                            <input
                                id="tel"
                                type="text"
                                value={formData.telegram}
                                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="wp" className="ml-[21px]">WhatsApp</label>
                            <input 
                                id="wp"
                                type="text"
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>
                    </div>
    );
}

export default SocialData;