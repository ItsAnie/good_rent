// Start.jsx
import React, { useState } from "react";
import Register from "../Register/Register";
import AuthForm from "../AuthForm/AuthForm"; // ընդհանուր ֆորմ

import './Start.css';

function Start() {
  const [view, setView] = useState("register"); // register | signin | signup

  return (
    <div className="start">
      <div className="bg_img flex flex-col">
        <div className="bg_img2">
          <div className="bg">
            <div className="grid grid-cols-3 place-items-center">
              <div className="grid_items flex items-center justify-center flex-col">
                <img src="/images/Vector.png" />
                <p>Находи то, что тебе нужно в любой точке мира!</p>
              </div>

              <div className="flex items-center justify-center flex-col">
                <img src="/images/logo.png" className="logo" />
                <h1>GoodRent.</h1>
              </div>

              <div className="grid_items flex items-center justify-center flex-col">
                <img src="/images/Vector2.png" />
                <p>Исполняй свои желания, благодаря покупкам в твоем городе!</p>
              </div>

              <div className="grid_items flex items-center justify-center flex-col">
                <img src="/images/Vector3.png" />
                <p>Участвуй в наших благотворительных проектах!</p>
              </div>

              <div className="grid_items flex items-center justify-center flex-col">
                <img src="/images/Vector4.png" />
                <p>Обменивайся услугами!</p>
              </div>

              <div className="grid_items flex items-center justify-center flex-col">
                <img src="/images/Vector5.png" />
                <p>Находи в аренду любую вещь или оборудование!</p>
              </div>
            </div>
          </div>

          <div className="auth-page">
            {view === "register" && (
              <Register
                onSignUpClick={() => setView("signup")}
                onSignInClick={() => setView("signin")}
              />
            )}

            {view === "signup" && (
              <AuthForm
                isSignUp={true}
                onBack={() => setView("register")}
              />
            )}

            {view === "signin" && (
              <AuthForm
                isSignUp={false}
                onBack={() => setView("register")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
