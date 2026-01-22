import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { database } from "../../../firebase";
import Card from "../Card";
import "./CardForUser.css";

function CardForUser() {
    const { state } = useLocation();
    const clickedItem = state?.item;

    const users = useSelector((state) => state.users.data);

    const [interestedFromDB, setInterestedFromDB] = useState({});

    useEffect(() => {
        if (!clickedItem?.id) return;

        const usersRef = ref(database, `interestedUsers/${clickedItem.id}`);
        const unsubscribe = onValue(usersRef, (snapshot) => {
            setInterestedFromDB(snapshot.val() || {});
        });

        return () => unsubscribe();
    }, [clickedItem?.id]);

    const interestedUsers = Object.keys(interestedFromDB).map((uid) => {
        const userFromStore = users.find((u) => u.uid === uid) || {};
        return {
            id: uid,
            name: userFromStore.name || "Анонимный пользователь",
            image: userFromStore.image || "/images/filled-user.png",
            timestamp: interestedFromDB[uid].timestamp
        };
    });

    return (
        <div className="flex justify-center gap-[42px] mt-[38px] mb-[59px]">
            <div className="w-[825px]">
                <Card card={clickedItem} forUser />
            </div>

            <div className="flex flex-col pt-[19px]">
                <h2 className="text-xl text-[#18A615] font-medium font-[Roboto] pl-[20px]">
                    Товар ожидают:
                </h2>

                <div className="review-scroll flex flex-col gap-[10px] max-h-[658px] w-full overflow-y-auto p-[11px]">
                    {interestedUsers.length === 0 ? (
                        <p className="text-center">Нет ожидающих пользователей․</p>
                    ) : (
                        interestedUsers.map((user) => (
                            <div
                                key={user.id}
                                className="flex justify-between items-center bg-white shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] py-[30px] pl-[20px] pr-[38px] rounded-[8px] cursor-pointer"
                            >
                                <div className="flex items-center gap-[10px]">
                                    <img
                                        src={user.image}
                                        className="w-[40px] h-[40px] rounded-full object-cover"
                                    />
                                    <p className="max-w-[212px] text-[#2F3C66] font-medium font-[Roboto]">
                                        {user.name}
                                    </p>
                                </div>

                                <img
                                    src="/images/message.png"
                                    className="w-[20px] h-[16px]"
                                />
                            </div>
                        ))
                    )}
                </div>

                <button className="w-[355px] h-[50px] bg-[#27AE60] text-white text-sm rounded-[25px] cursor-pointer">
                    Сообщить всем
                </button>
            </div>
        </div>
    );
}

export default CardForUser;
