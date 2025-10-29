import React from "react";
import './Profile.css'

import Review from "../Review/Review";

function Profile(){
    return(
        <div className="flex profile-full container mx-auto mt-[50px] mb-[50px]">
            <div className="mr-[19px]">
                <div className="profile-info flex gap-[29px]">
                    <img src="/images/profile.png" className="w-[100px] h-[100px] rounded-full" />
                    <div>
                        <div className="flex flex-col h-[283px] justify-between max-w-[404px]">
                            <div className="flex flex-col gap-[11px]">
                                <div className="flex text-[#F9BD00] font-normal text-sm gap-[20px]">
                                    <img src="/images/star.png" />
                                    4,3
                                </div>
                                <div className="flex justify-start items-center">
                                    <p className="max-w-[195px] text-base text-[#2F3C66] font-[Roboto] font-medium">Константин Константинопольский</p>
                                    <img src="/images/edit.png" className="w-[20px] h-[20.59px]" />
                                </div>
                            </div>

                            <div>
                                <div className="user-data flex gap-[22px] justify-start items-center">
                                    <img src="/images/envelope.png" className="w-[15px] h-[11px]" />
                                    <p className="text-sm">example@gmail.com</p>
                                </div>

                                <div className="user-data flex gap-[22px] justify-start items-center">
                                    <img src="/images/call-answer.png" className="w-[15px] h-[14px]" />
                                    <p className="text-sm">+7 909 900 90 90</p> 
                                    <p className="text-[#18A615] text-xs font-normal">Подтвердить</p>
                                </div>

                                <div className="user-data flex gap-[22px] justify-start items-center">
                                    <img src="/images/location.png" className="w-[11px] h-[15px]" />
                                    <p className="text-sm">Краснодар, ул. Тургенева 150</p>
                                </div>

                                <div className="user-data flex gap-[22px] justify-start items-center">
                                    <img src="/images/calendar-icon.png" className="w-[15px] h-[15px]" />
                                    <p className="text-sm">09.08.2020</p>
                                </div>

                                <div className="flex gap-[27px] mt-[16px]">
                                    <img src="/images/insta-icon.png" />
                                    <img src="/images/fb-icon.png" />
                                    <img src="/images/telegram.png" />
                                    <img src="/images/whatsapp-icon.png" />
                                </div>

                                <p className="text-xl text-[#F34040] font-normal mt-[26px]">Выйти</p>    
                            </div>
                        </div>
                        <p className="text-[#18A615] text-xl font-normal max-w-[250px] mt-[18px]">Разместить рекламный баннер</p>
                    </div>
                </div>    
            </div>

            <div className="border-solid border-l-1 border-[#D7E3F1] pl-[82px]">
                <div>
                    <div className="flex items-center gap-2">
                        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto]">Способы оплаты</h2>
                        <img src="/images/arow.png" className="arrow w-[11.69px] h-[5.84px]" />
                    </div>
                    <div className="flex flex-col justify-between w-full gap-2.25 mt-[21px]">
                        <div className="flex justify-between w-[732px] border-1 border-solid border-[#DEE2EC] rounded-lg p-[30px]">
                            <div className="flex" style={{gap: '30px'}}>
                                <img src="/images/cart-icon.png" className="w-[59px] h-[36px]" />
                                <div style={{fontSize: '14px'}}>
                                    <p>MasterCard</p>
                                    <p style={{color: '#BDBDBD'}}>**2341</p>
                                </div>
                            </div>
                            <div className="flex gap-[27px]">
                                <div>
                                    <input id="option-one" name="radio" value="one" checked type="radio" className="cart-radio" />
                                    <label htmlFor="option-one">
                                        <span></span>
                                    </label>
                                </div>
                                <img src="/images/basket.png" className="w-[20.21px] h-[24.88px]" />
                            </div>
                        </div>

                        <div className="flex justify-between w-[732px] border-1 border-solid border-[#DEE2EC] rounded-lg p-[30px]">
                            <div className="flex" style={{gap: '30px'}}>
                                <img src="/images/cart-icon.png" className="w-[59px] h-[36px]" />
                                <div style={{fontSize: '14px'}}>
                                    <p>MasterCard</p>
                                    <p style={{color: '#BDBDBD'}}>**2341</p>
                                </div>
                            </div>
                            <div className="flex gap-[27px]">
                                <div>
                                    <input id="option-one" name="radio" value="one" type="radio" className="cart-radio" />
                                    <label htmlFor="option-one">
                                        <span></span>
                                    </label>
                                </div>
                                <img src="/images/basket.png" className="w-[20.21px] h-[24.88px]" />
                            </div>
                        </div>
                    </div>
                    <p className="text-[#18A615] text-lg font-normal font-[Roboto] underline decoration-[#C2FFC5]">Добавить способ оплаты</p>
                </div>
                <Review />
            </div>        
        </div>
    );
}

export default Profile;