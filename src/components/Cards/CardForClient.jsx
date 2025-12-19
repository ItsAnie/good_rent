import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function CardForClient(){
    const { state } = useLocation();
    const clickedItem = state?.item;
    const users = useSelector((state) => state.users.data)
    const owner = users.find(user => user.uid === clickedItem.userId);


    return (
        <div className="flex justify-center mt-[47px] mb-[50px] h-full">
            {owner && (
                <div className="flex gap-[5px]">
                    <img src={owner.image} className="rounded-full w-[50px] h-[50px]" />
                    <div className="flex flex-col gap-[10px]">
                        <p className="max-w-[257px]">{owner.name}</p>
                        <p className="text-[#BDBDBD] text-xs">3 объявления</p>
                        <p>{owner.phone}</p>
                        <div className="flex gap-[27px]">
                            <img src="/images/insta-icon.png" />
                            <img src="/images/fb-icon.png" />
                            <img src="/images/telegram.png" />
                            <img src="/images/whatsapp-icon.png" />
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-[#D7E3F1] h-[780] w-[1px] ml-[86px] mr-[94px]"></div>
            <div className="w-[825px] h-[747px]">
                <Card card={clickedItem} forClient />
            </div>
        </div>
    );
}

export default CardForClient;