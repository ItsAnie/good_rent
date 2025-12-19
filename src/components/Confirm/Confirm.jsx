import React from "react";

function Confirm({ onClose }){
    return (
        <div>
            <div className="overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]">
                <div className="overlay-content mx-auto w-[650px] h-[365px] bg-white rounded-[18px] relative text-center top-[363px]">
                    <img 
                        src="/images/close.png" 
                        className="absolute right-[23px] top-[23px] cursor-pointer" 
                        onClick={onClose}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-between pt-[30px] pb-[61px]">
                        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] ">Подтвердить номер</h2>
                        <div>
                            <h3 className="text-3xl text-[#2F3C66] font-medium font-[Roboto]">123-456</h3>
                            <div className="h-[1px] w-[341px] bg-[#EDEEF3] mt-[17.5px] mb-[15.5px]"></div>
                            <p className="text-sm text-[#BDBDBD] font-normal max-w-[340px]">
                                Мы отправили код по смс на ваш номер. 
                                Введите его для подтверждения номера
                            </p>
                        </div>
                        <button className="w-[355px] h-[50px] bg-[#27AE60] text-white text-sm font-normal rounded-[25px] cursor-pointer">Подтвердить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm;