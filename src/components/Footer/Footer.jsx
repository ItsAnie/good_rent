import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer className="footer w-full bg-[#6BE070] text-[#FFFFFF] text-[21px] font-normal py-[19px]">
            <div className="footer-container container w-full mx-auto">
                <div className="flex justify-between w-full">
                    <div className="footer-text flex items-center justify-between" style={{width: '593px'}}>
                        <p>Условия использования</p>
                        <p>Оферта</p>
                        <p>Соглашение</p>
                    </div>

                    <div className="icons-list flex [@media(min-width:768px)_and_(max-width:1024px)]:flex-col [@media(min-width:768px)_and_(max-width:1024px)]:gap-6 justify-between">
                        <div className="footer-icons flex items-center justify-between" style={{width: '427px'}}>
                            <img src="/images/instagram.png" className="w-[28px] h-[28px]" />
                            <img src="/images/fb.png" className="w-[28px] h-[28px]" />
                            <img src="/images/in.png" className="w-[28px] h-[28px]" />
                            <img src="/images/yelp.png" className="w-[28px] h-[28px]" />
                            <img src="/images/youtube.png" className="w-[28px] h-[28px]" />
                            <img src="/images/tg.png" className="w-[28px] h-[28px]" />
                            <img src="/images/whatsapp.png" className="w-[28px] h-[28px]" />
                        </div>

                        <div className="language-list flex flex-col items-center gap-3.75 justify-between">
                            <p className="text-base">Язык интерфейса</p>
                            <select className="language bg-[#FFFFFF] text-[#2C2C2C] rounded-[10px] text-base 
                                                h-[45px] w-140px text-center focus:outline-none"
                            >
                                <option>Русский</option>
                                <option>Английский</option>
                                <option>Армянский</option>
                            </select>
                        </div>
                    </div>
                </div>

                <p className="text-[#F2F2F2] text-base text-center font-normal">ООО “Гудрент”. (c) Все права защищены. 2020</p>
            </div>    
        </footer>
    );
}

export default Footer;