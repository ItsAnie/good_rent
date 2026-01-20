import React from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";

function Register({ onSignUpClick, onSignInClick }) {
  const navigate = useNavigate();

  return (
    <div className="register flex absolute top-[45px] justify-center items-center text-[#FFFFFF] h-screen lg:h-[874px]">
      <div className="logo-register flex flex-col lg:justify-between w-full h-full md:justify-start">
        <div className="logo-header flex items-center flex-col">
          <img src="/images/logo.png" className="logo lg:w-[218px] lg:h-[260px]" />
          <h1 className="text-[64px] text-[#4f4f4f] font-medium font-[Roboto] leading-[16px]">GoodRent.</h1>
          <p className="flex lg:hidden text-center text-[#4F4F4F] font-normal text-lg
                        max-w-[267px] font-[Roboto] mt-4">
            Сервис поиска услуг и товаров для аренды рядом с Вами!
          </p>
        </div>    
      
          <div className="register-actions flex flex-col gap-[8px] justify-center items-center w-full">
            <button
              className="register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal cursor-pointer"
              onClick={onSignUpClick}
            >
              Зарегистрироваться через e-mail
            </button>

            <button className="flex items-center justify-center register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal gap-[8px] cursor-pointer">
              <img src="images/fb.png" className="w-[20px] h-20px" />
              Продолжить через Facebook
            </button>

            <button className="flex items-center justify-center register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal gap-[8px] cursor-pointer">
              <img src="images/google.png" className="w-[20px] h-20px" />
              Продолжить через Google
            </button>

            <button 
              className="register-btn login w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal cursor-pointer lg:block hidden"
              onClick={onSignInClick}
              >Войти через e-mail</button>

            <button 
              className="register-btn register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal cursor-pointer"
              onClick={() => navigate("/search")}
            >
              Продолжить без регистрации
            </button>
          </div>
      </div>  
    </div>
  );
}

export default Register;