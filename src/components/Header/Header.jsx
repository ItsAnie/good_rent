import React from "react";
import './Header.css'

function Header(){
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-wrapper flex">
                    <img src="/images/logo.png" className="logo" />
                    <div className="title">
                        <h2>GoodRent.</h2>
                        <p>Сервис поиска услуг и товаров для аренды рядом с Вами!</p>
                    </div>

                    <ul className="nav-list flex">
                        <li>Поиск</li>
                        <li>О нас </li>
                        <li>Помощь</li>
                        <li>Реклама</li>
                        <li>Блог</li>
                    </ul>

                    <div className="flex profile">
                        <img src="/images/notifications.png" className="not" />
                        <div className="flex flex-col about-profile">
                            <div className="flex about-profile">
                                <img src="/images/profile.png" className="profile-img" />
                                <p>Константин Константинопольский</p>
                                <img src="/images/exit.png" className="exit" />
                            </div>
                            <button className="profile-btn">Подать объявление</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header