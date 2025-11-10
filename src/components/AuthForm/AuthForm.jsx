import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, sendPasswordReset } from "../../store/slice/authSlice";
import "./AuthForm.css";

function AuthForm({ isSignUp }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [forget, setForget] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (forget) {
      dispatch(sendPasswordReset({ email: emailValue }))
        .unwrap()
        .then(() => alert("Если email зарегистрирован, инструкция для восстановления отправлена."))
        .catch((err) => alert(err));
      setForget(false);
      return;
    }

    if (isSignUp) {
      dispatch(registerUser({ email: emailValue, password: passwordValue }))
        .unwrap()
        .then(() => navigate("/search"))
        .catch((err) => console.log(err));
    } else {
      dispatch(loginUser({ email: emailValue, password: passwordValue }))
        .unwrap()
        .then(() => navigate("/search"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="sign-in flex absolute top-0 justify-between items-end">
      <div className="logo-form flex flex-col items-center justify-between text-[#ffffff] lg:h-[874px]">
        <div className="logo-header flex items-center justify-center flex-col">
          <img src="/images/logo.png" alt="logo" className="logo hidden lg:block" />
          <h1 className="text-[64px] text-[#4f4f4f] font-medium font-[Roboto]">GoodRent.</h1>
          <p className="flex lg:hidden text-[#4F4F4F] text-lg text-center font-[Roboto] max-w-[267px]">
            Сервис поиска услуг и товаров для аренды рядом с Вами!
          </p>
        </div>

        {!forget ? (
          <form className="box-border mt-[94px] lg:mt-0" onSubmit={handleSubmit}>
            <div className="txt_field relative border-b-2 border-b-solid border-b-[#EDEEF3] lg:text-[#F2F2F2]">
              <label className="block text-xs font-normal mb-[5px] text-[#BDBDBD] lg:text-[#F2F2F2]">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-[341px] text-base border-none bg-transparent outline-none text-[#242424] lg:text-[#ffffff]"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <span></span>
            </div>

            <div className="txt_field relative border-b-2 border-b-solid border-b-[#EDEEF3] mt-[12px] mb-[34px] lg:text-[#F2F2F2]">
              <label className="block text-xs font-normal mb-[5px] text-[#BDBDBD] lg:text-[#F2F2F2]">
                Пароль
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-[341px] text-base border-none bg-transparent outline-none text-[#242424] lg:text-[#ffffff]"
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
              disabled={loading}
            >
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </button>

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        ) : (
          <form className="forgot-form mt-[19px] box-border" onSubmit={handleSubmit}>
            <div className="txt_field relative border-b-2 border-b-solid border-b-[#f2f2f2]">
              <label className="block text-xs font-normal text-[#f2f2f2] mb-[5px]">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-[341px] text-base border-none bg-transparent outline-none text-[#ffffff]"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <span></span>
            </div>
            <p className="w-[340px] text-left mt-[14px] text-sm">
              Введите почтовый адрес, который использовали при регистрации, мы пришлем новый пароль
            </p>
            <button
              type="submit"
              className="register-btn w-[355px] h-[50px] rounded-[25px] bg-[#27AE60] text-sm font-normal cursor-pointer mt-[7px]"
              disabled={loading}
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
