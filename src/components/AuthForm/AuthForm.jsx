import React, { useState } from "react";
import "./AuthForm.css"; // օգտագործում ենք նույն CSS

function AuthForm({ isSignUp }) {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [forget, setForget] = useState(false);

  return (
    <div className="sign-in flex">
      <div className="flex items-start">
        <img src="/images/app_store.png" className="download" />
      </div>

      {!forget ? (
        <form>
          <div className="txt_field">
            <label>Email</label>
            <input type="email" name="email" required />
            <span></span>
          </div>

          <div className="txt_field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <span></span>

            {!isSignUp && passwordValue && (
              <span className="forgot" onClick={() => setForget(true)}>
                forgot password?
              </span>
            )}
          </div>

          <div className="flex items-center">
            <button type="submit" className="register-btn cursor-pointer">
              {isSignUp ? "Зарегистрироваться" : "Войти"}
            </button>
          </div>
        </form>
      ) : (
        !isSignUp && (
          <form>
            <div className="txt_field">
              <label>Email</label>
              <input type="email" name="email" required />
              <span></span>
            </div>
            <button className="forgot-btn" type="submit">Введите почтовый адрес, который использовали при регистрации, мы пришлем новый пароль</button>
          </form>
        )
      )}

      <div className="flex items-start">
        <img src="/images/google-play.png" className="download" />
      </div>
    </div>
  );
}

export default AuthForm;
