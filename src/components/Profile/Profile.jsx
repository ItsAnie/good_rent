import React from "react";
import './Profile.css'

import Review from "../Review/Review";

function Profile(){
    return(
        <div className="flex profile-full container">
            <div>
                <div className="profile-info flex">
                    <img src="/images/profile.png" className="profile-image rounded-full" />
                    <div>
                        <div>
                            <div className="flex">
                                <img src="/images/star.png" />
                                4.3
                            </div>
                            <div>
                                <p className="name"></p>
                                <img className="edit" />
                            </div>
                        </div>

                        <div>
                            <div className="user-data flex">
                                <img src="/images/envelope.png" className="data-icons" />
                                <p>example@gmail.com</p>
                            </div>

                            <div className="user-data flex">
                                <img src="/images/call-answer.png" className="data-icons" />
                                <p>+7 909 900 90 90</p> 
                                <p>Подтвердить</p>
                            </div>

                            <div className="user-data flex">
                                <img src="/images/location.png" className="data-icons" />
                                <p>Краснодар, ул. Тургенева 150</p>
                            </div>

                            <div className="user-data flex">
                                <img src="/images/calendar-icon.png" className="data-icons" />
                                <p>09.08.2020</p>
                            </div>

                            <div className="flex media-icons">
                                <img src="/images/insta-icon.png" />
                                <img src="/images/fb-icon.png" />
                                <img src="/images/telegram.png" />
                                <img src="/images/whatsapp-icon.png" />
                            </div>

                            <p>Выйти</p>
                        </div>
                    </div>
                </div>
                <p>Разместить рекламный баннер</p>
            </div>

            <div className="profile-details">
                <div>
                    <div className="flex flex-col justify-between w-full">
                        <div>
                            <h2>Способы оплаты</h2>
                            <img className="arrow" />
                        </div>
                        <div className="payment flex justify-between">
                            <div className="flex" style={{gap: '30px'}}>
                                <img src="/images/cart-icon.png" className="cart-img" />
                                <div style={{fontSize: '14px'}}>
                                    <p>MasterCard</p>
                                    <p style={{color: '#BDBDBD'}}>**2341</p>
                                </div>
                            </div>
                            <div className="flex" style={{gap: '25px'}}>
                                <input type="radio" checked />
                                <img src="/images/basket.png" className="basket" />
                            </div>
                        </div>

                        <div className="payment flex justify-between">
                            <div className="flex" style={{gap: '30px'}}>
                                <img src="/images/cart-icon.png" className="cart-img" />
                                <div style={{fontSize: '14px'}}>
                                    <p>MasterCard</p>
                                    <p style={{color: '#BDBDBD'}}>**2341</p>
                                </div>
                            </div>
                            <div className="flex" style={{gap: '25px'}}>
                                <input type="radio" />
                                <img src="/images/basket.png" className="basket" />
                            </div>
                        </div>
                    </div>
                    <p>Добавить способ оплаты</p>
                </div>
                <Review />
            </div>        
        </div>
    );
}

export default Profile;