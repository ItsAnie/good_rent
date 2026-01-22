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
    <div className="w-full h-auto bg-white lg:bg-transparent fixed bottom-0 left-0 lg:static">
      <header className="w-full bg-white lg:bg-[#65E36A] rounded-b-[20px] shadow-[0_2px_4px_0_rgba(0,0,0,0.07)]">
        <div className="container mx-auto py-[15px] text-[#4F4F4F] font-medium font-[Roboto]">
          <div className="div-xl flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">

            {/* Logo  */}
            <div className="hidden lg:flex items-center cursor-pointer" onClick={() => navigate("/")}>
              <img src="/images/logo.png" className="w-[101px] h-[120px] flex-shrink-0" />
              <div className="ml-3 flex flex-col">
                <h2 className="title text-5xl">GoodRent.</h2>
                <p className="service-txt text-xs font-normal max-w-[207px]">
                  Сервис поиска услуг и товаров для аренды рядом с Вами!
                </p>
              </div>
            </div> 

            {/* Navigation */}
            <div className="nav-list flex items-center lg:items-start text-2xl justify-between w-full xl:w-[700px] lg:w-[350px] sm:w-[531px] px-[38px] sm:px-0 md:px-0">
              <div className="flex flex-col items-center gap-[51px]" onClick={() => navigate("/search")}>
                <p className="cursor-pointer hidden lg:block">Поиск</p>
                <img src={`${location.pathname === "/search" ? "/images/search_active.png" : "/images/search_mobile.png"}`} className="lg:hidden w-[27px]" />
                {location.pathname === "/search" && (
                  <div className="hidden lg:block xl:w-[100px] w-[50px] h-[3px] bg-[#4F4F4F]"></div>
                )}
              </div>

              <div className="flex flex-col items-center gap-[51px]">
                <p onClick={() => navigate("/about-us")} className="hidden lg:block cursor-pointer">О нас</p>
                <img src={`${location.pathname === "/map" ? "/images/maps-and-flags-active.png" : "/images/maps-and-flags.png"}`} className="lg:hidden w-[20px]" onClick={() => navigate("/map")} />           
                {location.pathname === "/about-us" && (
                  <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
                )}
              </div>

              <div className="flex flex-col items-center gap-[51px]">
                <p onClick={() => navigate("/help")} className="hidden lg:block cursor-pointer">Помощь</p>
                <img src="/images/plus.png" className="lg:hidden w-[48px]" />
                {location.pathname === "/help" && (
                  <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
                )}
              </div>

              <div className="flex flex-col items-center gap-[51px]">
                <p onClick={() => navigate("/advertising")} className="hidden lg:block cursor-pointer">Реклама</p>
                <img 
                  src={`${location.pathname === "/profile/notifications" ? " /images/Path_active.png" : " /images/Path.png"}`} 
                  className="lg:hidden w-[28px]" 
                  onClick={() => navigate("/profile/notifications")} />
                {location.pathname === "/advertising" && (
                  <div className="w-[100px] h-[3px] bg-[#4F4F4F]"></div>
                )}
              </div>

              <div className="cursor-pointer">
                <p className="hidden lg:block">Блог</p>
                <img 
                  src={`${location.pathname === "/profile" ? "/images/human-active.png" : "/images/human.png" }`}
                  className="block lg:hidden w-[21px]" 
                  onClick={handleProfileClick} />
              </div> 
            </div>

            {/* Profile */}
            <div
                className="hidden lg:flex profile items-center max-w-[337px] gap-[37px] cursor-pointer"
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
                  <div className="flex items-start gap-[10px] about-profile xl:pr-0 lg:pr-[10px]">
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
    </div>
  );
}

export default Header;


