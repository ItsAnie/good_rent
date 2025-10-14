import React from "react";
import './Start.css'

function Start(){
    return (
        <div className="start">
            <div className="bg_img flex flex-col">
                <div className="bg_img2" >
                    <div className="bg">
                        <div className="grid grid-cols-3 place-items-center">
                            <div className="grid_items flex items-center justify-center flex-col">
                                <img src="/images/Vector.png"/>
                                <p>Находи то, что тебе нужно в любой точке мира!</p>
                            </div>

                            <div className="flex items-center justify-center flex-col">
                                <img src="/images/logo.png" className="logo" />
                                <h1>GoodRent.</h1>
                            </div>

                            <div className="grid_items flex items-center justify-center flex-col">
                                <img src="/images/Vector2.png"/>
                                <p>Исполняй свои желания, благодаря покупкам в твоем городе!</p>
                            </div>

                            <div className="grid_items flex items-center justify-center flex-col">
                                <img src="/images/Vector3.png"/>
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

                    <div className="register flex">
                        <img src="/images/app_store.png" className="download" />
                        <div className="register-actions flex flex-col">
                            <button className="register-btn">Зарегистрироваться через e-mail</button>
                            <button className="register-btn">Продолжить через Facebook</button>
                            <button className="register-btn">Продолжить через Google</button>
                            <button className="register-btn">Войти через e-mail</button>
                            <button className="register-btn">Продолжить без регистрации</button>
                        </div>
                        <img src="/images/google-play.png" className="download" />
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default Start;