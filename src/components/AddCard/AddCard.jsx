import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../store/slice/profileSlice";

function AddCard({onClose}){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.profile.data);
    const uid = user.uid;

    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardType, setCardType] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");


    const handleSave = () => {
        const newCard = {
            id: Date.now(),
            number: cardNumber,
            expiry: `${expMonth}/${expYear}`,
            cvv,
            type: cardType
        };

        dispatch(updateUserProfile({
            uid,
            profileData: {
                ...user,
                cards: [...(user.cards || []), newCard],
                selectedCard: newCard.id
            }
        }));

        onClose();
    };

    const detectCardType = (number) => {
        if(!number) return "";

        if(/^4/.test(number)) return "visa";

        if (/^5[1-5]/.test(number)) return "master";

        if (/^2(2[2-9][1-9]|[3-6][0-9]{2}|7[01][0-9]|720)/.test(number))
            return "master";

        return "unknown";
    };

    const handleCardInput = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setCardNumber(value);
        setCardType(detectCardType(value));
    };

    return(
        <div className="fixed top-0 left-0 w-full h-full z-[50] flex items-center justify-center">
            <div className="w-[524px] h-[796px] fixed">
                <form 
                    className="w-full h-[662px] bg-white border border-[#DEE2EC] rounded-[17px] flex flex-col px-[41px] relative top-[162px] left-[143px]"
                    onSubmit={(e) => {
                    e.preventDefault(); 
                    handleSave();
                }}
                >
                    <img 
                        src="/images/close_card.png" 
                        onClick={onClose}
                        className="absolute right-[30px] top-[30px] w-[20px] h-[20px] cursor-pointer" 
                    />
                    <div className="relative translate-y-[123px] w-[200px]">
                        <div className="w-[387px] h-[255px] bg-white rounded-[8px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)] flex flex-col justify-center pl-[25px] pr-[27px] relative z-[6]">
                            <div className="flex justify-end gap-[18px]">
                                <img 
                                    src="/images/visa.png" 
                                    className="w-[77px] h-[25px]"
                                />
                                <img 
                                    src="/images/master.png" 
                                    className="w-[41px] h-[25px]" 
                                />
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="card_number" className="text-sm font-normal text-[#BDBDBD]">Номер карты</label>
                                    <input 
                                        id="card_number" 
                                        type="text" 
                                        required
                                        value={cardNumber}
                                        onChange={handleCardInput}
                                        className="w-[335px] h-[40px] bg-[#F9F9F9] rounded-[2px] pl-[8px] inset-shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] focus:outline-none mt-[13px]"
                                    />
                                </div>
                            
                                <label className="text-sm font-normal text-[#BDBDBD] flex flex-col mt-[21px] gap-[13px]">Действительна до:
                                    <div className="flex items-center gap-[13px]">
                                        <input 
                                            type="text" 
                                            required
                                            value={expMonth}
                                            onChange={(e) => setExpMonth(e.target.value)}
                                            placeholder="ММ"
                                            className="w-[62px] h-[40px] bg-[#F9F9F9] inset-shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] 
                                                       rounded-[2px] focus:outline-none text-center text-[#747474] placeholder-[#747474] font-[Roboto]"
                                        />
                                        <p className="text-base text-[#747474] font-[Roboto] font-normal">/</p>
                                        <input 
                                            type="text" 
                                            required
                                            value={expYear}
                                            onChange={(e) => setExpYear(e.target.value)}
                                            placeholder="ГГ"
                                            className="w-[62px] h-[40px] bg-[#F9F9F9] inset-shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] 
                                                       rounded-[2px] focus:outline-none text-center text-[#747474] placeholder-[#747474] font-[Roboto]"
                                        />
                                    </div>
                                </label>                           
                            </div>
                        </div>
                        <div className="w-[376px] h-[282px] bg-[#E1E1E1] rounded-[8px] flex items-end gap-[24px] relative bottom-[180px] left-[65px] pl-[29px] pb-[22px]">
                            <div className="flex flex-col gap-[10px]">
                                <label htmlFor="cvv/cvc" className="text-sm text-[#747474] font-normal font-[Roboto]">CVV/CVC</label>
                                <input 
                                    id="cvv/cvc" 
                                    type="text" 
                                    required
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    className="w-[69px] h-[40px] bg-[#F9F9F9] rounded-[2px] pl-[8px] inset-shadow-[0_2px_5px_0_rgba(0,0,0,0.1)] focus:outline-none"
                                />
                            </div>
                            <p className="text-sm text-[#BDBDBD] max-w-[137px]">Три цифры на обороте карты</p>
                        </div>
                    </div>
                    <button 
                        className="w-[241px] h-[46px] bg-[#18A615] rounded-[18px] text-white mx-auto cursor-pointer"
                        type="submit"
                    >
                            Добавить карт
                    </button>  
                </form>
            </div>
        </div>
    );
}

export default AddCard;