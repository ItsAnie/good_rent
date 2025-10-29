import React from "react";
import './Register.css'

function Register({ onSignUpClick, onSignInClick }) {
  return (
    <div className="register flex">
      <div className="logo-register flex flex-col justify-between">
        <div className="logo-header flex items-center flex-col">
          <img src="/images/logo.png" className="logo" />
          <h1 className="text-[64px] text-[#4f4f4f] font-medium font-[Roboto]">GoodRent.</h1>
          <p className="flex lg:hidden">Сервис поиска услуг и товаров для аренды рядом с Вами!</p>
        </div>    
      
          <div className="register-actions flex flex-col">
            <button
              className="register-btn cursor-pointer"
              onClick={onSignUpClick}
            >
              Зарегистрироваться через e-mail
            </button>

            <button className="flex items-center justify-center register-btn register-icon-btn cursor-pointer">
              <img src="images/fb.png" className="goog-fb" />
              Продолжить через Facebook
            </button>

            <button className="flex items-center justify-center register-btn register-icon-btn cursor-pointer">
              <img src="images/google.png" className="goog-fb" />
              Продолжить через Google
            </button>

            <button 
              className="register-btn cursor-pointer"
              onClick={onSignInClick}
              >Войти через e-mail</button>

            <button className="register-btn cursor-pointer">Продолжить без регистрации</button>
          </div>
      </div>  
    </div>
  );
}

export default Register;
