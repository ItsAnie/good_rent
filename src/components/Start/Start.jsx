import React, { useState } from "react";
import Register from "../Register/Register";
import AuthForm from "../AuthForm/AuthForm"; 
import Header from "../Header/Header";
import Profile from "../Profile/Profile";

import './Start.css'

function Start() {
  const [view, setView] = useState("register");

  return (
    <div className="start flex flex-col w-full min-h-[1002px] overflow-x-hidden">
      {view !== "dashboard" && (
        <div className="bg_img flex flex-col w-full min-h-[1002px] items-center 
                        justify-start bg-[url(/images/bg_img.png)] bg-no-repeat bg-cover bg-center"
        >
          <div className="downloads flex justify-between absolute top-[845px]" style={{width: '900px'}}>
            <img src="/images/app_store.png" />
            <img src="/images/google-play.png" />
          </div>
          <div className="bg_img2 bg-[url(/images/bg_img2.png)] bg-no-repeat bg-contain
                          max-w-[1505px] w-full min-h-[784px]"
          >
            <div className="bg grid grid-cols-3 place-items-center mx-auto max-w-[1115px]
                            w-full bg-[#FFFFFF] rounded-b-[50px] bg-[rgba(255,255,255,0.2)] gap-[25px] pt-[86px] pr-[51px] pb-[16px] pl-[51px]"
            >
                <div className="grid_items flex items-center justify-center flex-col
                                w-full max-w-[320px] h-[250px] bg-[rgba(255,255,255,0.4)]
                                rounded-[20px] text-center text-[#333333] font-semibold text-2xl
                                font-[Montserrat]"
                >
                  <img src="/images/Vector.png" />
                  <p className="opacity-80 mt-[10px] max-w-[272px]">Находи то, что тебе нужно в любой точке мира!</p>
                </div>

                <div className="auth-page flex justify-center w-full">
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

                <div className="grid_items flex items-center justify-center flex-col
                                w-full max-w-[320px] h-[250px] bg-[rgba(255,255,255,0.4)]
                                rounded-[20px] text-center text-[#333333] font-semibold text-2xl
                                font-[Montserrat]">
                  <img src="/images/Vector2.png" className="w-[100px] h-[100px] object-contain" />
                  <p className="opacity-80 mt-[10px] max-w-[272px]">Исполняй свои желания, благодаря покупкам в твоем городе!</p>
                </div>

                <div className="grid_items flex items-center justify-center flex-col
                                w-full max-w-[320px] h-[250px] bg-[rgba(255,255,255,0.4)]
                                rounded-[20px] text-center text-[#333333] font-semibold text-2xl
                                font-[Montserrat]">
                  <img src="/images/Vector3.png" className="w-[100px] h-[100px] object-contain" />
                  <p className="opacity-80 mt-[10px] max-w-[272px]">Участвуй в наших благотворительных проектах!</p>
                </div>

                <div className="grid_items flex items-center justify-center flex-col
                                w-full max-w-[320px] h-[250px] bg-[rgba(255,255,255,0.4)]
                                rounded-[20px] text-center text-[#333333] font-semibold text-2xl
                                font-[Montserrat]">
                  <img src="/images/Vector4.png" className="w-[100px] h-[100px] object-contain" />
                  <p className="opacity-80 mt-[10px] max-w-[272px]">Обменивайся услугами!</p>
                </div>

                <div className="grid_items flex items-center justify-center flex-col
                                w-full max-w-[320px] h-[250px] bg-[rgba(255,255,255,0.4)]
                                rounded-[20px] text-center text-[#333333] font-semibold text-2xl
                                font-[Montserrat]">
                  <img src="/images/Vector5.png" className="w-[100px] h-[73px] object-contain" />
                  <p className="opacity-80 mt-[10px] max-w-[272px]">Находи в аренду любую вещь или оборудование!</p>
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
