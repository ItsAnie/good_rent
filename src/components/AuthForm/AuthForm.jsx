import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

function AuthForm({ isSignUp }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [forget, setForget] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Այստեղ կարող ես ավելացնել վավերացում կամ API հարցում
    navigate("/search"); // Նավիգացիա դեպի /search
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert();
    setForget(false);
  };

  return (
    <div className="sign-in flex absolute top-0 justify-center items-end">
      <div className="logo-form flex flex-col items-center justify-between text-[#ffffff] min-h-[874px]">
        <div className="logo-header flex items-center justify-center flex-col">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <h1 className="text-[64px] text-[#4f4f4f] font-medium font-[Roboto]">
            GoodRent.
          </h1>
          <p className="flex lg:hidden">
            Сервис поиска услуг и товаров для аренды рядом с Вами!
          </p>
        </div>

        {!forget ? (
          <form className="mt-[19px] box-border" onSubmit={handleSubmit}>
            <div className="txt_field relative border-b-2 border-b-solid border-b-[#f2f2f2]">
              <label className="block text-xs font-normal text-[#f2f2f2] mb-[5px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-[341px] text-base border-none bg-transparent outline-none text-[#ffffff]"
              />
              <span></span>
            </div>

            <div className="txt_field relative border-b-2 border-b-solid border-b-[#f2f2f2] mt-[12px] mb-[34px]">
              <label className="block text-xs font-normal text-[#f2f2f2] mb-[5px]">
                Пароль
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-[341px] text-base border-none bg-transparent outline-none text-[#ffffff]"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <span></span>

              {!isSignUp && passwordValue && (
                <span
                  className="forgot absolute bottom-[-25px] right-0 cursor-pointer text-[14px] text-white"
                  onClick={() => setForget(true)}
                >
                  Забыли пароль?
                </span>
              )}
            </div>

            <button
              type="submit"
              className="register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal cursor-pointer"
            >
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </button>
          </form>
        ) : (
          <form
            className="forgot-form mt-[19px] box-border"
            onSubmit={handleForgotPassword}
          >
            <div className="txt_field relative border-b-2 border-b-solid border-b-[#f2f2f2]">
              <label className="block text-xs font-normal text-[#f2f2f2] mb-[5px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-[341px] text-base border-none bg-transparent outline-none text-[#ffffff]"
              />
              <span></span>
            </div>
            <p className="w-[340px] text-left mt-[14px] text-sm">
              Введите почтовый адрес, который использовали при регистрации, мы
              пришлем новый пароль
            </p>
            <button
              type="submit"
              className="register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal cursor-pointer mt-[7px]"
            >
              Восстановить пароль
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
