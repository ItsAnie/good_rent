import React, {useState, useEffect} from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import { useSelector } from "react-redux";
import "./InterestedUsers.css";

function InterestedUsers({ productId, onClose }) {
    const allUsers = useSelector(state => state.users.data); 
    const [interestedFromDB, setInterestedFromDB] = useState({});
    const [selectedUserId, setSelectedUserId] = useState(null); 

    useEffect(() => {
        if (!productId) return;

        const usersRef = ref(database, `interestedUsers/${productId}`);
        const unsubscribe = onValue(usersRef, snapshot => {
            setInterestedFromDB(snapshot.val() || {});
        });

        return () => unsubscribe();
    }, [productId]);

    const interestedWithData = Object.keys(interestedFromDB).map(uid => {
        const userFromStore = allUsers.find(u => u.uid === uid) || {};
        return {
            id: uid,
            name: userFromStore.name || "Анонимный пользователь",
            image: userFromStore.image || "/images/filled-user.png",
            timestamp: interestedFromDB[uid].timestamp
        };
    });

    return (
        <div>
            <div className="overlay fixed top-0 left-0 w-full h-full z-10">
                <div className="overlay-content mx-auto w-[650px] bg-white rounded-[18px] relative text-center top-[231px]">
                    <img 
                        src="/images/close.png"
                        className="absolute right-[25px] top-[23px] cursor-pointer"
                        onClick={onClose}
                    />
                    <div className="w-full max-h-[509px] flex flex-col items-center justify-between pt-[30px] pb-[61px]">
                        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto]">Кому сдан товар?</h2>
                        <div className="users-scroll flex flex-col justify-center items-center gap-[10px] overflow-y-auto w-auto h-auto py-[14px] px-[12px] mt-[14px]">
                            {interestedWithData.map(user => (
                                <div 
                                    key={user.id} 
                                    onClick={() => setSelectedUserId(user.id)}
                                    className={`flex items-center gap-[10px] w-[335px] py-[30px] pl-[20px] rounded-[8px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] 
                                                cursor-pointer ${selectedUserId === user.id ? "bg-[#F0F0F0]" : "bg-white"}`}
                                >
                                    <img 
                                        src={user.image} 
                                        alt={user.name} 
                                        className="w-[50px] h-[50px] rounded-full object-cover" 
                                    />
                                    <p className="text-[#2F3C66] font-medium font-[Roboto] max-w-[212px]">{user.name}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-[355px] h-[50px] bg-[#27AE60] text-white text-sm font-normal rounded-[25px] cursor-pointer mt-[33px]">
                            Подтвердить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InterestedUsers;
