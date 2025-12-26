import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import "./Messages.css";
import BannerSubmissionSuccess from "../BannerSubmissionSuccess";
import { useAds } from "../../store/AdsContext";
import { useSelector } from "react-redux";

function Messages() {
    const navigate = useNavigate();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [chats, setChats] = useState([]);
    const { submittedBanner } = useAds();
    const users = useSelector(state => state.users.data);
    console.log("Users", users);


    useEffect(() => {
        if (!currentUser) return;

        const chatsRef = ref(database, "chats");
        const unsubscribe = onValue(chatsRef, snapshot => {
            const data = snapshot.val() || {};
            const list = [];

            Object.entries(data).forEach(([chatId, chat]) => {
                if (!chat.users?.[currentUser?.uid]) return;

                const opponentId = Object.keys(chat.users).find(uid => uid !== currentUser?.uid);
                const opponentFromState = users.find(u => u.uid === opponentId);

                console.log("opponentId", opponentId)
                console.log("usersMap", users.map(u => u.uid));

                const opponent = {
                    id: opponentId,
                    name: opponentFromState?.name,
                    image: opponentFromState?.photoURL 
                };
                console.log("opponent", opponent)

                list.push({
                    id: chatId,
                    opponentId: opponentId,
                    lastMessage: chat.lastMessage,
                    unread: chat.unread?.[currentUser.uid],
                    receiverId: opponent.id,
                    receiverName: opponentFromState?.name,
                    receiverImage: opponentFromState?.image,
                    bitmap: chat.lastMessage?.bitmap
                });
            });

            list.sort((a, b) => b.lastMessage?.timestamp - a.lastMessage?.timestamp);
            setChats(list);
        });

        return () => unsubscribe();
    }, [currentUser]);

    return (
        <div>
            {submittedBanner && <BannerSubmissionSuccess /> }
            <div className="overflow-hidden">
                <h2 className="font-[Roboto] font-medium text-xl text-[#18A615] ml-[15px]">Мои сообщения</h2>
                <div className="messages flex flex-col gap-[10px] w-[560px] h-[650px] overflow-y-auto pr-[15px] mt-[18px]">
                    {chats.map((chat) => (
                        <div 
                            key={chat.id}
                            onClick={() => navigate(`/profile/messages/${chat.id}`, {
                                state: {
                                    chatId: chat.id,
                                    receiverId: chat.receiverId,
                                    receiverName: chat.receiverName,
                                    receiverImage: chat.receiverImage,
                                    bitmap: chat.bitmap
                                }
                            })}
                            className={`flex justify-between w-full bg-white cursor-pointer rounded-[8px] 
                                        pt-[14px] pb-[15px] pl-[20px] pr-[14px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]
                                        ${chat.unread ? "border-2 border-[#219653] font-medium" : "border border-transparent font-normal"}`}
                        >
                            <div className="flex gap-[11px]">
                                <img src={chat.receiverImage} alt="user" className="h-[40px] w-[40px] rounded-full object-cover flex-shrink-0" />
                                <div className="flex flex-col justify-between w-full h-full">
                                    <div className="text-xs font-[Roboto]">
                                        <h3>{chat.receiverName}</h3>
                                        <p className="text-[#747474]">{chat.lastMessage?.text}</p>
                                    </div>
                                    <p className="text-[10px] text-[#BDBDBD] font-[Roboto]">
                                        {new Date(chat.lastMessage?.timestamp).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#EDEEF3] h-full w-[1px] absolute top-0 right-[16px]"></div>
                            <img src={chat.bitmap} alt="bitmap" className="h-[70px] w-[70px]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}   

export default Messages;
