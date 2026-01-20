import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Confirm from "../Confirm/Confirm";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import Logout from "../Logout";

function Profile({ user }){
    const navigate = useNavigate();
    const location = useLocation();
    const isMessagesPage = location.pathname.includes("/profile/notifications") || location.pathname.includes("/profile/messages/");
    const {data} = useSelector((state) => state.profile);

    const [showConfirm, setShowConfirm] = useState(false);
    const [logout, setLogout] = useState(false);

    const handleEditClick = () => {
        navigate("/edit-profile");
    }

    return(
        <div className={`profile-full flex container mx-auto lg:mt-[50px] ${location.pathname === "/profile/notifications" ? "pt-[30px]" : ""} lg:pt-0 mb-[50px] min-h-screen`}>
            <div className="mr-[19px] hidden lg:block">
                <div className="profile-info flex gap-[29px]">
                    <img src={data?.image || "/images/userpic.png"} className="w-[100px] h-[100px] rounded-full object-cover" />
                    <div>
                        <div className="flex flex-col justify-between max-w-[404px]">
                            <div className="flex flex-col gap-[11px]">
                                <div className="flex text-[#F9BD00] font-normal text-sm gap-[20px]">
                                    <img src="/images/star.png" />
                                    4,3
                                </div>
                                <div className="flex justify-start items-center cursor-pointer" onClick={handleEditClick}>
                                    <p className="max-w-[195px] text-base text-[#2F3C66] font-[Roboto] font-medium">{data.name}</p>
                                    <img src="/images/edit.png" className="w-[20px] h-[20.59px]" />
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col gap-[16px] mt-[30px]">
                                    <div className="user-data flex gap-[22px] justify-start items-center">
                                        <img src="/images/envelope.png" className="w-[15px] h-[11px]" />
                                        <p className="text-sm">{data.email}</p>
                                    </div>

                                    <div className="user-data flex gap-[22px] justify-start items-center">
                                        <img src="/images/call-answer.png" className="w-[15px] h-[14px]" />
                                        <p className="text-sm">{data.phone}</p> 
                                        <p 
                                            className="text-[#18A615] text-xs font-normal cursor-pointer"
                                            onClick={() => setShowConfirm(true)}
                                        > 
                                            Подтвердить
                                        </p>
                                    </div>

                                    <div className="user-data flex gap-[22px] justify-start items-center">
                                        <img src="/images/location.png" className="w-[11px] h-[15px]" />
                                        <p className="text-sm w-[238px]">{data.location}</p>
                                    </div>

                                    <div className="user-data flex gap-[22px] justify-start items-center">
                                        <img src="/images/calendar-icon.png" className="w-[15px] h-[15px]" />
                                        <p className="text-sm">09.08.2020</p>
                                    </div>
                                </div>
                                <div className="flex gap-[27px] mt-[16px]">
                                    <img src="/images/insta-icon.png" />
                                    <img src="/images/fb-icon.png" />
                                    <img src="/images/telegram.png" />
                                    <img src="/images/whatsapp-icon.png" />
                                </div>   
                                <p 
                                    className="text-xl text-[#F34040] font-normal mt-[26px] cursor-pointer"
                                    onClick={() => setLogout(true)}
                                >
                                    Выйти
                                </p>    
                            </div>
                        </div>
                        <p className="text-[#18A615] text-xl font-normal max-w-[250px] mt-[18px]">Разместить рекламный баннер</p>
                    </div>
                </div>    
            </div>

            <div className={`border-none lg:border-solid lg:border-l-1 lg:border-[#D7E3F1] w-full lg:w-auto ${isMessagesPage ? "lg:pl-[63px]" : "pl-[78px]"}`}>
                {!isMessagesPage && (
                    <>
                        <div className="w-[732px]">
                            <Payment />
                        </div>
                        <Review isProfile={true} profileUserId={data.uid} />
                    </>
                )}
                <Outlet />
            </div> 
            {showConfirm && <Confirm onClose={() => setShowConfirm(false)} />}   
            {logout && <Logout onClose={() => setLogout(false)} />} 
        </div>
    );
}

export default Profile;