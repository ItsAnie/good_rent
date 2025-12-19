import React from "react";
import { useAds } from "../../store/AdsContext";
import Payment from "../Payment/Payment";
import "./Pay.css"

function Pay({onClose, bannerData, slot}){
    const { setPaidBanners } = useAds();

    const handlePaymentSuccess = () => {
        if (!bannerData || !slot) return;

        setPaidBanners(prev => ({
            ...prev,
            [slot]: bannerData
        }));
        onClose();
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full z-[9999]">
                <div className="flex flex-col items-center mx-auto w-[524px] bg-white border border-[#DEE2EC] rounded-[18px] relative text-center top-[236px] pt-[75px] pb-[60px]">
                    <img 
                        src="/images/close.png" 
                        className="absolute right-[30px] top-[30px] cursor-pointer" 
                        onClick={onClose}
                    />
                    <div className="flex flex-col gap-[10px] text-sm text-[#828282] w-[273px]">
                        <div>
                            <input 
                                id="week"
                                name="week" 
                                type="radio" 
                                className="period-radio cursor-pointer" 
                            />
                            <label htmlFor="week" className="flex gap-[17px]">
                                 <span className="radio-outer">
                                    <span className="radio-inner"></span>
                                </span>
                                <p>1 неделя (249$)</p>
                            </label>
                        </div>
                        <div>
                            <input 
                                id="two-week"
                                name="two-week" 
                                type="radio" 
                                className="period-radio cursor-pointer" 
                            />
                            <label htmlFor="two-week" className="flex gap-[17px]">
                                 <span className="radio-outer">
                                    <span className="radio-inner"></span>
                                </span>
                                <p>2 недели (469$, экономия 28$)</p>
                            </label>
                        </div>
                        <div>
                            <input 
                                id="three-week"
                                name="three-week" 
                                type="radio" 
                                className="period-radio cursor-pointer" 
                            />
                            <label htmlFor="three-week" className="flex gap-[17px]">
                                 <span className="radio-outer">
                                    <span className="radio-inner"></span>
                                </span>
                                <p>3 недели (699$, экономия 48$)</p>
                            </label>
                        </div>
                        <div>
                            <input 
                                id="four-week"
                                name="four-week" 
                                type="radio" 
                                className="period-radio cursor-pointer" 
                            />
                            <label htmlFor="four-week" className="flex gap-[17px]">
                                 <span className="radio-outer">
                                    <span className="radio-inner"></span>
                                </span>
                                <p>4 недели (849$, экономия 147$)</p>
                            </label>
                        </div>
                    </div>
                    <div className="w-[487px] mt-[16px]">
                        <Payment forPay />
                    </div>

                    <button 
                        onClick={handlePaymentSuccess}
                        className="bg-[#18A615] w-[241px] h-[46px] text-white rounded-[18px] cursor-pointer mt-[18px]"
                    >
                        Оплатить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pay;