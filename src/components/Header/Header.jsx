import React from "react";
import { useNavigate } from "react-router-dom";
import './Header.css'

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="w-full bg-[#65E36A] rounded-b-[20px] overflow-hidden">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">

          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src="/images/logo.png" className="w-[101px] h-[120px] flex-shrink-0" />
            <div className="ml-3 flex flex-col text-[#4F4F4F]">
              <h2 className="title text-5xl font-medium font-[Roboto] text-[#4F4F4F]">GoodRent.</h2>
              <p className="service-txt text-xs font-normal max-w-[207px]">
                Сервис поиска услуг и товаров для аренды рядом с Вами!
              </p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="nav-list hidden lg:flex flex-wrap gap-6 list-none text-lg font-medium">
            <li className="cursor-pointer" onClick={() => navigate("/search")}>Поиск</li>
            <li className="cursor-pointer">О нас</li>
            <li className="cursor-pointer">Помощь</li>
            <li className="cursor-pointer">Реклама</li>
            <li className="cursor-pointer">Блог</li>
          </ul>

          {/* Profile */}
          <div
              className="profile flex items-center max-w-[337px] gap-[37px] cursor-pointer"
              onClick={handleProfileClick} 
            >
              <img src="/images/notifications.png" className="w-[37px] h-[38px]" />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5 about-profile">
                  <img
                    src="/images/profile.png"
                    className="profile-img rounded-full w-[40px] h-[40px]"
                  />
                  <p className="name max-w-[212px] text-base font-medium">
                    Константин Константинопольский
                  </p>
                  <img src="/images/exit.png" className="exit w-[20px] h-[20px]" />
                </div>
                <button
                  className="profile-btn bg-[#27AE60] text-[#FFFFFF] w-[263px] h-[50px] text-sm font-normal rounded-[25px] border-none cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/create-ad"); 
                  }}
                >
                  Подать объявление
                </button>
              </div>
            </div>

        </div>
      </div>
    </header>
  );
}

export default Header;


