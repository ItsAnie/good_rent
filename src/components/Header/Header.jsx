import React, { useState } from "react";
import Search from '../Search/Search';
import Profile from '../Profile/Profile';
import './Header.css';

function Header() {
    const [showProfile, setShowProfile] = useState(false);

    const handleProfileClick = () => {
        setShowProfile(prev => !prev); 
    }

    return (
        <div>
            <header className="header">
                <div className="header-container">
                    <div className="header-wrapper container flex">
                        <div className="flex items-center">
                            <img src="/images/logo.png" className="header-logo" />
                            <div className="title">
                                <h2>GoodRent.</h2>
                                <p>Сервис поиска услуг и товаров для аренды рядом с Вами!</p>
                            </div>
                        </div>

                        <div className="list">
                            <ul className="nav-list flex">
                                <li>Поиск</li>
                                <li>О нас </li>
                                <li>Помощь</li>
                                <li>Реклама</li>
                                <li>Блог</li>
                            </ul>
                        </div>

                        <div className="flex items-center profile" style={{ gap: '37px' }} onClick={handleProfileClick}>
                            <img src="/images/notifications.png" className="not" />
                            <div className="flex flex-col gap-2.5 about-profile">
                                <div className="flex items-center gap-2.5 about-profile">
                                    <img src="/images/profile.png" className="profile-img rounded-full" />
                                    <p>Константин Константинопольский</p>
                                    <img src="/images/exit.png" className="exit" />
                                </div>
                                <button className="profile-btn">Подать объявление</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {showProfile ? <Profile /> : <Search />}
        </div>
    );
}

export default Header;
