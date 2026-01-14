import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { setUser } from "../store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Logout({ onClose }){
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => dispatch(setUser(null)));
    };

    useEffect(() => {
        if(!user){
            navigate("/");
        }
    }, user, navigate);

    return (
        <div>
            <div className="overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]">
                <div className="overlay-content mx-auto w-[650px] h-[300px] bg-white rounded-[18px] relative text-center top-[363px]">
                    <img 
                        src="/images/close.png" 
                        className="absolute right-[23px] top-[23px] cursor-pointer" 
                        onClick={onClose}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-center gap-10 pt-[30px] pb-[61px]">
                        <p className="text-lg text-[#27AE60] font-medium font-[Roboto]">Вы действительно хотите выйти?</p>
                        <div className="flex gap-2">
                            <button 
                                onClick={onClose}
                                className="w-[200px] h-[50px] border border-[#27AE60] text-[#27AE60] text-sm font-normal rounded-[25px] cursor-pointer"
                            >
                                Отмена
                            </button>
                            <button
                                onClick={handleLogout} 
                                className="w-[200px] h-[50px] bg-[#27AE60] text-white text-sm font-normal rounded-[25px] cursor-pointer"
                            >
                                Выйти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout;