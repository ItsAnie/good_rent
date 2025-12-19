import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllUsers } from "../../store/slice/usersSlice";
import Review from "../Review/Review";
import LeaveFeedback from "./LeaveFeedback";

function Feedbacks() {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const product = state?.item;

    const users = useSelector(state => state.users.data);

    const [showLeaveFeedback, setShowLeaveFeedback] = useState(false);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchAllUsers());
        }
    }, [users.length, dispatch]);

    if (!product) return <p>Нет данных для отображения</p>;

    const owner = users.find(user => user.uid === product.userId);

    return (
        <div className="flex flex-col justify-center items-center mt-[66px] mb-[69px]">
            <div className="flex justify-between w-[766px] py-[15px] pl-[22px] pr-[16px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] rounded-[8px]">
                <div className="flex items-center gap-[24px]">
                    <img src={product.images?.[1]} alt={product.name} className="w-[70px] h-[70px]" />
                    <div className="text-xs">
                        <div className="flex items-center">
                            <h2 className="text-sm w-[165px]">{product.name}</h2>
                            <p className="text-[10px] text-[#BDBDBD]">{product.type}</p>
                        </div>
                        <p className="text-[#2F3C66] font-medium font-[Roboto]">{product.price} ₽</p>
                        <p>{product.description}</p>
                    </div>
                </div>

                {owner && (
                    <div className="flex gap-[11px]">
                        <p className="text-xs max-w-[140px]">{owner.name}</p>
                        <img src={owner.image} alt={owner.name} className="w-[50px] h-[50px] rounded-full" />
                    </div>
                )}
            </div>
            <div className="mt-[18px] text-xl font-medium font-[Roboto]">
                <h2 className="text-[#18A615]">Отзывы о товаре</h2>
                <Review productId={product.id} isFeedback={true} />
            </div>
            <button 
                className="w-[355px] h-[50px] bg-[#27AE60] text-white text-sm rounded-[25px] mt-[49px] cursor-pointer"
                onClick={() => setShowLeaveFeedback(true)}
            >
                Оставить отзыв
            </button>
            {showLeaveFeedback && <LeaveFeedback productId={product.id} onClose={() => setShowLeaveFeedback(false)} />}
        </div>
    );
}

export default Feedbacks;
