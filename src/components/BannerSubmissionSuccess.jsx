import React, { useState } from "react";
import Pay from "./Pay/Pay";
import { useAds } from "../store/AdsContext";

function BannerSubmissionSuccess(){
    const [openPay, setOpenPay] = useState(false);
    const { submittedBanner } = useAds();

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-[5px] py-[15px] mb-[24px] text-sm border border-[2px] border-[#219653] rounded-[8px]">
                <p>Поздравляем! Ваш вариант баннера одобрен модераторами!</p>
                <div className="flex gap-[12px]">
                    <button className="w-[260px] h-[50px] border border-[2px] border-[#27AE60] text-[#27AE60] cursor-pointer rounded-[25px]">Отказаться от рекламы</button>
                    <button 
                        className="w-[260px] h-[50px] bg-[#27AE60] text-white cursor-pointer rounded-[25px]"
                        onClick={() => setOpenPay(true)}
                    >
                        Оплатить
                    </button>
                </div>
            </div>
            {openPay && 
                <Pay 
                    bannerData={submittedBanner}
                    slot={submittedBanner.slot}
                    onClose={() => setOpenPay(false)} 
                />
            }
        </div>
    );
}

export default BannerSubmissionSuccess;