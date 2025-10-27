import React, { useState } from "react";
import Register from "../Register/Register";
import AuthForm from "../AuthForm/AuthForm"; 
import Header from "../Header/Header";

import './Start.css'

function Start() {
  const [view, setView] = useState("register");

  return (
    <div className="start">
      {view !== "dashboard" && (
        <div className="bg_img flex flex-col">
          <div className="downloads flex justify-between" style={{width: '900px'}}>
            <img src="/images/app_store.png" />
            <img src="/images/google-play.png" />
          </div>
          <div className="bg_img2">
            <div className="bg grid grid-cols-3 place-items-center">
                <div className="grid_items flex items-center justify-center flex-col">
                  <img src="/images/Vector.png" />
                  <p>Находи то, что тебе нужно в любой точке мира!</p>
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
                      onSuccess={() => setView("dashboard")}
                    />
                  )}

                  {view === "signin" && (
                    <AuthForm
                      isSignUp={false}
                      onBack={() => setView("register")}
                      onSuccess={() => setView("dashboard")}
                    />
                  )}
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
                  <img src="/images/Vector4.png"/>
                  <p>Обменивайся услугами!</p>
                </div>

                <div className="grid_items flex items-center justify-center flex-col">
                  <img src="/images/Vector5.png"/>
                  <p>Находи в аренду любую вещь или оборудование!</p>
                </div>
              
            </div> 
          </div>
        </div>
      )}

      {/* Dashboard/Header */}
      {view === "dashboard" && <Header />}
    </div>
  );
}

export default Start;
