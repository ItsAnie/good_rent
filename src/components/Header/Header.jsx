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
            <header className="header m-0 w-full bg-linear-to-t from-[#65E36A] to-[#3CC742] rounded-b-[20px]">
                <div className="header-container py-[15px] px-0">
                    <div className="header-wrapper container flex items-center justify-between mx-auto">
                        <div className="flex items-center">
                            <img src="/images/logo.png" className="header-logo w-[101px] h-[120px]" />
                            <div className="title flex flex-col text-sm/16 font-[Roboto] text-[#4F4F4F]">  {/*harcnel chatin linei pahy*/}
                                <h2 className="text-5xl font-medium font-[Roboto] text-[#4F4F4F]">GoodRent.</h2>
                                <p className="text-xs font-normal max-w-[207px]">Сервис поиска услуг и товаров для аренды рядом с Вами!</p>
                            </div>
                        </div>

                        <div className="list w-[800px]">
                            <ul className="nav-list flex justify-between ww-full list-none text-lg font-medium pt-[63px]">
                                <li className="cursor-pointer pb-[51px]">Поиск</li>
                                <li className="cursor-pointer pb-[51px]">О нас </li>
                                <li className="cursor-pointer pb-[51px]">Помощь</li>
                                <li className="cursor-pointer pb-[51px]">Реклама</li>
                                <li className="cursor-pointer pb-[51px]">Блог</li>
                            </ul>
                        </div>

                        <div className="flex items-center max-w-[337px] gap-[37px]" onClick={handleProfileClick}>
                            <img src="/images/notifications.png" className="w-[37px] h-[38px]" />
                            <div className="flex flex-col gap-2.5">
                                <div className="flex items-center gap-2.5 about-profile">
                                    <img src="/images/profile.png" className="profile-img rounded-full w-[40px] h-[40px]" />
                                    <p className="max-w-[212px] text-base font-medium">Константин Константинопольский</p>
                                    <img src="/images/exit.png" className="exit w-[20px] h-[20px]" />
                                </div>
                                <button className="profile-btn bg-[#27AE60] text-[#FFFFFF] w-[263px] h-[50px] text-sm font-normal rounded-[25px] border-none cursor-pointer">Подать объявление</button>
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
