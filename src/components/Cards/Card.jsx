import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { database } from "../../firebase";
import { ref, get, update, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { fetchAllUsers } from "../../store/slice/usersSlice";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import InterestedUsers from "../InerestedUsers/InterestedUsers";
import AdSlot from "../Advertising/AdSlot";

function Card({card, forSearch, forUser, forClient, showAds }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCard = card || useSelector(state => state.allProducts.selectedCard) || {};
    const users = useSelector((state) => state.users.data);
    const [reviewsCount, setReviewsCount] = useState(0);
    const [isRented, setIsRented] = useState(false);
    const owner = users.find(user => user.uid == selectedCard?.userId);

    const auth = getAuth();
    const currentUser = auth.currentUser;

    const handleInterestedClick = (productId) => {
        if (!currentUser) return;
        const interestedRef = ref(database, `interestedUsers/${productId}`);

        update(interestedRef, {
            [currentUser.uid]: {
                id: currentUser.uid, 
                name: currentUser.displayName, 
                image: currentUser.photoURL,
                timestamp: Date.now()
            }
        });
    };

    useEffect(() => {
        if (users.length === 0) {
            dispatch(fetchAllUsers());
        }
    }, [ dispatch, users.lenght]);

    useEffect(() => {
        if (!selectedCard?.id) return;
        const reviewRef = ref(database, `reviews/${selectedCard.id}`);
        const unsubscribe = onValue(reviewRef, (snapshot) => {
            const data = snapshot.val();
            setReviewsCount(data ? Object.values(data).length : 0);
        });
        return () => unsubscribe();
    }, [selectedCard?.id]);  

    if (!selectedCard) {
        return <p className="text-center text-[#BDBDBD]">Выберите карточку</p>;
    }

    return(
        <div>
            {!forUser && !forClient && showAds &&
            <div className="mb-[84px]">
                <AdSlot id={3} />
            </div>
            }
            <div className="card flex flex-col gap-[56px]">
                <div className={`card-group flex flex-col rounded-[20px]
                                w-full h-full pt-[28px] pb-[21px] px-[92px]  
                                ${forSearch ? "border border-[#18A615]" : ""}`}
                >
                    <div className="cards flex flex-col gap-[30px]">
                        <div className="flex justify-between w-full">
                            <div>
                                <h2 className="text-2xl font-normal text-[#000000] leading-[16px] mb-[15px]">{selectedCard.name}</h2>
                                <p className="text-xl TEXT-[#4F4F4F] leading-[16px]">{selectedCard.price && `${selectedCard.price}₽`} {selectedCard.rentDay}</p>
                            </div>
                            <p className="view text-[#BDBDBD] font-normal text-xs max-w-[175px]">150 просмотров (+3 сегодня)
                                №174379387590357</p>
                        </div>

                    
                        <div className="w-full mx-auto overflow-hidden">
                            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                                <ImageCarousel images={selectedCard.images} />
                            </div>
                        </div>

                    
                        <h3 className="font-normal text-2xl">{selectedCard.description}</h3>
                        <div className={`flex ${forSearch ? "justify-between" : "justify-center"}`}>
                            {forSearch && owner && (
                                <div className="flex gap-1.25">
                                    <img src={owner.image} className="w-[50px] h-[50px] rounded-full" />
                                    <div className="flex flex-col gap-[10px]">                               
                                        <p className="max-w-[257px] leading-[20px]">{owner.name}</p>
                                        <p className="text-[#BDBDBD] text-xs">3 объявления</p>
                                        <p className="text-sm">{owner.phone}</p>
                                        <p className="text-[#27AE60] text-sm">Отзывы</p>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col text-[#BDBDBD] text-xs gap-[10px]">
                                <p>Тип объявления</p>
                                <p>Категория</p>
                                <p>Адрес</p>
                            </div>

                            <div className="flex flex-col items-end gap-[10px] text-sm">
                                <p>{selectedCard.type}</p>
                                <p>{selectedCard.category}</p>
                                <p>{selectedCard.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className={`remember flex flex-col justify-center mx-auto text-xs font-normal text-[#BDBDBD] leading-[16px] items-center ${
                                        forUser ? "mt-[33px]" : "mt-[54px]"
                                    }`}>
                        {forUser ? 
                            <button 
                                className="text-white bg-[#27AE60] text-sm w-[355px] h-[50px] rounded-[25px] border-none cursor-pointer"
                                onClick={() => setIsRented(true)}
                                >
                                {selectedCard.type === "Аренда" ? "Товар сдан в аренду" : selectedCard.type === "Продажа" ? "Товар продан" : ""}
                            </button> : 
                            <h3 
                                className="text-sm text-[#18A615] text-center cursor-pointer"
                                onClick={() => handleInterestedClick(selectedCard.id)}
                            >
                                Напомнить, когда станет доступно
                            </h3>}
                        {forClient && (
                            <p 
                                className="text-[#27AE60] text-sm text-center mt-[29px] cursor-pointer"
                                onClick={() => navigate("/feedbacks", { state: { item: selectedCard } })}
                            >
                                Отзывы ({reviewsCount})
                        </p>
                        )}
                        <p className="max-w-[220px] text-left mt-[28px]">Минимальный срок аренды {selectedCard.rentMin} Максимальный — {selectedCard.rentMax}</p>
                        {!forUser ? 
                            <button 
                                className="text-white bg-[#27AE60] text-sm w-[355px] h-[50px] rounded-[25px] border-none mt-[14px] cursor-pointer"
                                onClick={() => navigate(`/profile/messages/${owner?.uid}`, {
                                    state: {
                                        receiverId: owner?.uid,
                                        receiverName: owner?.name,
                                        receiverImage: owner?.image,
                                        bitmap: selectedCard.images?.[1]
                                        
                                    }
                                })}
                            >
                                Написать
                            </button> :
                            <div className="mt-[44px]">
                                {selectedCard.type !== "Продажа" && (
                                <div className="flex justify-between w-[355px]">
                                    <p className="text-black text-sm">Недоступен для аренды</p>
                                    <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                        <input type="checkbox" id="toggle" className="sr-only peer" defaultChecked  />
                                        <div className="w-[38px] h-[21px] bg-[#EDEEF3] rounded-full transition-colors duration-300"></div>
                                        <div className="absolute w-[21px] h-[21px] bg-[#219653] rounded-full shadow-md transform peer-checked:translate-x-[18px] transition-transform duration-300"></div>
                                    </label>
                                </div>
                                )}
                                <p className="text-[#F34040] text-center mt-[36px] text-sm cursor-pointer">Снять с публикации</p>
                            </div>
                        }
                    </div>
                    {isRented && <InterestedUsers productId={selectedCard.id} onClose={() => setIsRented(false)} />}
                </div>  
                {!forUser && !forClient && showAds && <AdSlot />}
                {!forUser && !forClient && <img src="/images/Map.png" alt="Map" />}
            </div>
        </div>
    );
}

export default Card;
