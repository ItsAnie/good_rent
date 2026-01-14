import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Header.css'
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const {data: profile} = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <header className="w-full bg-[#65E36A] rounded-b-[20px] overflow-hidden">
      <div className="container mx-auto py-[15px] text-[#4F4F4F] font-medium font-[Roboto]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">

          {/* Logo  */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <img src="/images/logo.png" className="w-[101px] h-[120px] flex-shrink-0" />
            <div className="ml-3 flex flex-col">
              <h2 className="title text-5xl">GoodRent.</h2>
              <p className="service-txt text-xs font-normal max-w-[207px]">
                Сервис поиска услуг и товаров для аренды рядом с Вами!
              </p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="nav-list hidden lg:flex flex-wrap gap-20 list-none text-2xl">
            <div className="flex flex-col items-center gap-[51px]">
              <li className="cursor-pointer" onClick={() => navigate("/search")}>Поиск</li>
              {location.pathname === "/search" && (
                <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
              )}
            </div>

            <div className="flex flex-col items-center gap-[51px]">
              <li className="cursor-pointer" onClick={() => navigate("/about-us")}>О нас</li>
              {location.pathname === "/about-us" && (
                <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
              )}
            </div>

            <div className="flex flex-col items-center gap-[51px]">
              <li className="cursor-pointer" onClick={() => navigate("/help")}>Помощь</li>
              {location.pathname === "/help" && (
                <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
              )}
            </div>

            <div className="flex flex-col items-center gap-[51px]">
              <li className="cursor-pointer" onClick={() => navigate("/advertising")}>Реклама</li>
              {location.pathname === "/advertising" && (
                <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
              )}
            </div>

            <li className="cursor-pointer">Блог</li> 
          </ul>

          {/* Profile */}
          <div
              className="profile flex items-center max-w-[337px] gap-[37px] cursor-pointer"
              onClick={handleProfileClick} 
            >
              <img 
                src="/images/notifications.png" 
                className="w-[37px]" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/profile/notifications");
                }}
               />
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5 about-profile">
                  <img
                    src={profile?.image || "/images/empty-user.png"}
                    className="profile-img rounded-full w-[40px] h-[40px] object-cover"
                  />
                  <p className="name max-w-[212px] text-base">
                    {profile?.name || "Анонимный пользователь"}
                  </p>
                  <img src="/images/exit.png" className="exit w-[20px] h-[20px]" />
                </div>
                <button
                  className="profile-btn bg-[#27AE60] text-[#FFFFFF] w-[263px] h-[50px] text-sm font-normal rounded-[25px] border-none cursor-pointer shadow-[0_2px_10px_0_rgba(0,0,0,0.07)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/new-add"); 
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


