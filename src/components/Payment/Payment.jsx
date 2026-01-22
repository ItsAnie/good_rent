import React, {useState} from "react";
import { useToggle } from "../../hooks/useToggle";
import AddCard from "../AddCard";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../store/slice/profileSlice";
import "./Payment.css"

function Payment({forPay}){
    const dispatch = useDispatch();
    const [isOpen, toggle] = useToggle(true);
    const [isAddCardOpen, setIsAddCardOpen] = useState(false);

    const profile = useSelector((state) => state.profile.data);
    const cards = profile.cards || [];

    const selectedCard = (id) => {
        dispatch(updateUserProfile({
            uid: profile.uid,
            profileData: {
            selectedCard: id
            }
        }));
    };

    const deleteCard = (id) => {
        const newList = cards.filter(card => card.id !==id);

        dispatch(updateUserProfile({
            uid: profile.uid,
            profileData: {
                ...profile,
                cards: newList
            }
        }));
    };
    
    return (
        <div>
            {!forPay && (
                <div className="flex items-center gap-2 cursor-pointer" onClick={toggle}>
                    <h2 className="text-xl font-medium text-[#18A615] font-[Roboto]">Способы оплаты</h2>
                    <img src={isOpen ? "/images/arow.png" : "/images/arow-down.png"} className="arrow w-[11.69px] h-[5.84px]" />
                </div>
            )}
            {isOpen && (
            <div className="mt-[21px] flex flex-col gap-[9px]">
                {cards.map((card) => (
                <div key={card.id}>
                    <div className="flex justify-between w-full border-1 border-solid border-[#DEE2EC] rounded-lg p-[30px]">
                        <div className="flex items-center gap-[30px]">
                            {card.type === "master" && <img src="/images/master.png" className="w-[59px] h-[36px]" />}
                            {card.type === "visa" && <img src="/images/visa.png" className="w-[59px] h-[25px]" />}
                            <div className="text-sm">
                                <p className="font-[Roboto] text-sm font-normal">{card.type === "visa" ? "Visa" : "MasterCard"}</p>
                                <p className="text-[#BDBDBD]">**{card.number.slice(-4)}</p>
                            </div>
                        </div>
                        <div className="flex gap-[27px]">
                            <div>
                                <input 
                                    id={`card-${card.id}`} 
                                    name="payment"
                                    value="one" 
                                    checked={profile.selectedCard === card.id} 
                                    onChange={() => selectedCard(card.id)}
                                    type="radio" 
                                    className="cart-radio cursor-pointer" />
                                <label htmlFor={`card-${card.id}`}>
                                    <span className="bg-[#F2F2F2] shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"></span>
                                </label>
                            </div>
                            <img 
                                src="/images/basket.png" 
                                className={`delete-icon w-[20.21px] h-[24.88px] cursor-pointer ${forPay ? "invisible " : ""}`} 
                                onClick={() => deleteCard(card.id)}
                            />
                        </div>
                    </div>
                </div>
                ))}
                {!forPay ? (
                    <p className="text-[#18A615] text-lg font-normal font-[Roboto] underline decoration-[#C2FFC5] cursor-pointer"
                        onClick={() => setIsAddCardOpen(true)}
                    >
                        Добавить способ оплаты
                    </p>
                ) : (
                    <button 
                        className="bg-[#18A615] w-[241px] h-[46px] text-white rounded-[18px] cursor-pointer mx-auto mt-[15px]"
                        onClick={() => setIsAddCardOpen(true)}
                    >
                        Добавить карту
                    </button>
                )}
            </div>
            )}
            {isAddCardOpen && <AddCard onClose={() => setIsAddCardOpen(false)} />}
        </div>
    );            
}

export default Payment;