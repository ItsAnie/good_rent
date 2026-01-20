import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { ref, push, update, onValue } from "firebase/database";
import { database } from "../../firebase";
import "./Chat.css";
import { useSelector } from "react-redux";

function Chat(){
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const location = useLocation();
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const users = useSelector(state => state.profile.data);
    const { receiverId, receiverName, receiverImage, bitmap } = location.state || {};

    const getChatId = (uid1, uid2) => {
        return [uid1, uid2].sort().join("_");
    };

    const chatId = receiverId ? getChatId(currentUser?.uid, receiverId) : location.state?.chatId;

    useEffect(() => { 
        if(!chatId) return; 
        const messagesRef = ref(database, `messages/${chatId}`); 
        const unsubscribe = onValue(messagesRef, snapshot => { const data = snapshot.val() || {}; 
        const list = Object.entries(data).map(([id, msg]) => ({ 
            id, 
            ...msg, 
        })); 
        setMessages(list);
     }); 
     return () => unsubscribe(); 
    }, [chatId]);

    const sendMessage = async () => {
        if (!text.trim()) return;

        const msgRef = ref(database, `messages/${chatId}`);

        await push(msgRef, {
            text,
            senderId: currentUser?.uid,
            senderName: currentUser.displayName,
            senderImage: currentUser.photoURL || users.image,
            timestamp: Date.now()
        });

        await update(ref(database, `chats/${chatId}`), {
            users: {
                [currentUser?.uid]: true,
                [receiverId]: true
            },
            lastMessage: {
                text,
                senderId: currentUser.uid,
                senderName: currentUser.displayName,
                senderImage: currentUser.photoURL,
                bitmap: bitmap,
                timestamp: Date.now(),
                read: false
            },
            unread: {
                [receiverId]: true,  
                [currentUser.uid]: false  
            },
        });

        setText("");
    };

    useEffect(() => {
        if (!currentUser || !chatId) return;

        messages.forEach(msg => {
            if(msg.senderId !== currentUser.uid && !msg.read){
            update(ref(database, `messages/${chatId}/${msg.id}`), { read: true });
            }
        });
    }, [messages, currentUser, chatId]);

    if (!currentUser) return;

    return (
        <div className="w-full">
            <div className="lg:w-[655px] w-full">
                <div className="flex lg:flex-row flex-col justify-between items-center w-full lg:h-[70px] rounded-[8px] 
                                shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] bg-white relative 
                                mb-[-40px] pl-[20px] pt-[14px] pb-[16px] pr-[29px]"
                >
                    <div className="flex justify-between w-full items-center">
                        <div className="flex items-center justify-start gap-[6px] lg:hidden">
                            <img src="/images/arrow-point-to-right.png" />
                            <p 
                                className="text-[#18A615] text-sm"
                                onClick={() => navigate("/profile/notifications")}
                            >
                                Назад
                            </p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                            <img src={receiverImage} alt="user" className="rounded-full w-[40px] h-[40px] object-cover hidden lg:block" />
                            <div className="text-[10px] text-[#BDBDBD]">
                                <p className="text-xs text-[#000000] font-medium font-[Roboto]">{receiverName}</p>
                                <p className="hidden lg:block">Online</p>
                                <p className="text-center lg:text-start">24.04.2019 в 17:53</p>
                            </div>
                        </div>
                        <img src={receiverImage} alt="user" className="rounded-full w-[40px] h-[40px] object-cover lg:hidden" />
                    </div>
                    <div className="lg:w-[1px] lg:h-[70px] w-full h-[1px] bg-[#EDEEF3] absolute top-[70px] lg:right-[99.5px] lg:top-0"></div>
                    <div className="flex justify-start lg:justify-end w-full items-center text-xs mt-[21px] lg:mt-0 gap-[10px]">
                        <img src={bitmap} alt="bitmap" className="w-[43px] h-[43px] rounded-full lg:rounded-none" />
                        <div className="lg:hidden flex flex-col">
                            <h3>Приставка X-BOX 360</h3>
                            <p className="text-[#2F3C66] font-medium">10 000 руб.</p>
                        </div>
                    </div>
                </div>
               
                <div 
                    className="bg-none lg:bg-[#F2F2F2] border-none lg:border lg:border-[#E0E0E0]
                            w-full h-[659px] rounded-[15px] text-xs flex flex-col justify-between lg:pb-[35px] lg:pl-[37px] lg:pr-[10px]"
                >
                    <div className="chat mt-[41px] overflow-y-scroll pl-[20px] pr-[23px] lg:pr-[20px] lg:pl-[39px]">
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                className={`flex items-center gap-[6px] mt-[11px] ${
                                msg.senderId === currentUser.uid ? "justify-end" : ""
                            }`}
                            >
                                {msg.senderId === currentUser.uid && (
                                    <img 
                                        src={msg.read ? "/images/checked.png" : "/images/not_checked.png"} 
                                        alt="status" 
                                    />
                                )}

                                <p
                                    className={`rounded-[19px] pl-[31px] pr-[14px] py-[10px] max-w-[260px]
                                    ${msg.senderId === currentUser.uid
                                        ? "bg-[#6FCF97] text-white"
                                        : "bg-white"
                                    }`}
                                >
                                    {msg.text}
                                </p>                          
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-[9px] justify-center bg-white lg:bg-transparent w-full py-[10px] pr-[10px] pl-[21px] fixed bottom-0 lg:static">
                        <input 
                            type="text" 
                            value={text}
                            onChange={e => setText(e.target.value)}
                            className="w-[494px] h-[30px] md:h-[87px] bg-[#F6F6FA] lg:bg-white border-none lg:border lg:border-[#E0E0E0] rounded-[10.5px] focus:outline-none pl-[8px]"
                        />
                        <div className="flex flex-col justify-between">
                            <div className="md:flex flex-col gap-[6px] hidden">
                                <img src="/images/add_photo.png" className="w-[25px] cursor-pointer" />
                                <img src="/images/attach.png" className="w-[22.24px] cursor-pointer" />
                            </div>
                            <p 
                                className="text-sm text-[#18A615] cursor-pointer" 
                                onClick={sendMessage}
                            >
                                    Отправить
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;