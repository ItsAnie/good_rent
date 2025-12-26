import React from "react";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer w-full bg-[#6BE070] text-[#FFFFFF] text-[18px] xl:text-[21px] font-normal py-[16px] xl:py-[19px]">
      <div className="footer-container container mx-auto px-6 xl:px-12">
        <div className="flex flex-wrap justify-between items-center w-full gap-6 xl:gap-0">
          <div className="footer-text flex flex-wrap items-center justify-between gap-4 xl:gap-8">
            <p>Условия использования</p>
            <p>Оферта</p>
            <p>Соглашение</p>
          </div>

          <div className="icons-list flex flex-wrap justify-between gap-8 xl:gap-12 items-center">
            <div className="footer-icons flex flex-wrap items-center justify-center gap-3 xl:gap-5">
              <img src="/images/instagram.png" className="w-[28px] h-[28px]" />
              <img src="/images/fb.png" className="w-[31px] h-[31px]" />
              <img src="/images/in.png" className="w-[28px] h-[28px]" />
              <img src="/images/yelp.png" className="w-[21px] h-[28px]" />
              <img src="/images/youtube.png" className="w-[31px] h-[21px]" />
              <img src="/images/tg.png" className="w-[31px] h-[26px]" />
              <img src="/images/whatsapp.png" className="w-[28px] h-[28px]" />
            </div>

            <div className="language-list flex flex-col items-center gap-3 justify-between">
              <p className="text-sm xl:text-base text-[#FFF4F4]">Язык интерфейса</p>
              <select
                id="language"
                className="language bg-[#FFFFFF] text-[#2C2C2C] rounded-[10px] text-sm xl:text-base 
                           h-[40px] xl:h-[45px] w-[120px] xl:w-[140px] text-center focus:outline-none cursor-pointer"
              >
                <option>Русский</option>
                <option>Английский</option>
                <option>Армянский</option>
              </select>
            </div>
          </div>
        </div>

        <p className="text-[#F2F2F2] text-sm xl:text-base text-center mt-4 xl:mt-6">
          ООО “Гудрент”. (c) Все права защищены. 2020
        </p>
      </div>
    </footer>
  );
}

export default Footer;
