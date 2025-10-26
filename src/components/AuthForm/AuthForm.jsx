import React, { useState } from "react";
import "./AuthForm.css"; 

function AuthForm({ isSignUp, onBack, onSuccess }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [forget, setForget] = useState(false);

  return (
    <div className="sign-in flex">
      <img src="/images/app_store.png" className="download" />

      <div className="logo-form flex flex-col items-center">
        <div className="logo-header flex items-center justify-center flex-col">
          <img src="/images/logo.png" className="logo" />
          <h1>GoodRent.</h1>
          <p className="flex lg:hidden">Сервис поиска услуг и товаров для аренды рядом с Вами!</p>
        </div>

      {!forget ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (onSuccess) onSuccess(); 
          }}
        >
          <div className="txt_field">
            <label>Email</label>
            <input type="email" name="email"  /> {/*heto dnel required */}
            <span></span>
          </div>

          <div className="txt_field pass">
            <label>Пароль</label>
            <input
              type="password"
              name="password"
              
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />    {/*heto dnel required */}
            <span></span>

            {!isSignUp && passwordValue && (
              <span className="forgot" onClick={() => setForget(true)}>
                Забыли пароль?
              </span>
            )}
          </div>

          <div>           
            <button type="submit" className="register-btn cursor-pointer">
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </button>
          </div>

        </form>
      ) : (
        !isSignUp && (
          <form className="forgot-form">
            <div className="txt_field">
              <label>Email</label>
              <input type="email" name="email" required />
              <span></span>
            </div>
            <p className="forgot-txt">
              Введите почтовый адрес, который использовали при регистрации, мы пришлем новый пароль
            </p>
            <button type="submit" className="register-btn cursor-pointer">
              Восстановить пароль
            </button>
          </form>
        )
      )}
  </div>

    <img src="/images/google-play.png" className="download" />

    </div>
  );
}

export default AuthForm;
