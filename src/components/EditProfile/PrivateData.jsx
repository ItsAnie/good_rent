import React, {useState} from "react";
import AddressField from "../AddressField";

function PrivateData({ formData, setFormData, toggleMap  }) {
    return (
        <div className="flex flex-col text-base text-[#BDBDBD] font-medium font-[Roboto] gap-[22px]">
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="name" className="ml-[21px]">Имя</label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="mail" className="ml-[21px]">E-Mail</label>
                            <input
                                id="mail"
                                type="text"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="phone" className="ml-[21px]">Телефон</label>
                            <input
                                id="phone"
                                type="text"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="border-none bg-[#F6F6F6] w-[489px] h-[50px] rounded-[19px] text-sm text-black font-normal pl-[20.26px] focus:outline-none"
                            />
                        </div>

                        <AddressField toggleMap={toggleMap} setFormData={setFormData} formData={formData} />
                        
                        <p className="max-w-[340px] ml-[20px] font-normal">
                            Личные данные защищены политикой конфиденциальности
                        </p>
                    </div>
    );
}

export default PrivateData;