import React, {useState} from "react";
import { useSelector } from "react-redux";
import { database } from "../../firebase";
import { ref, push } from "firebase/database";

function LeaveFeedback({onClose, productId}){
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);

    const currentUser = useSelector(state => state.auth.user);

    const handleSubmit = async () => {
    if (!reviewText) return;
    if (!currentUser?.uid) {
        alert("Пожалуйста, войдите в систему, чтобы оставить отзыв.");
        return;
    }

    const reviewRef = ref(database, `reviews/${productId}`);
    await push(reviewRef, {
        text: reviewText,
        rating,
        date: new Date().toLocaleDateString("ru-RU"),
        userId: currentUser?.uid || "unknown",
        name: currentUser?.name || "Анонимный пользователь",
        image: currentUser?.image || "/images/filled-user.png",
    });

    setReviewText("");
    onClose();
};

    return(
        <div>
            <div className="overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]">
                <div className="overlay-content mx-auto w-[650px] h-[450px] bg-white rounded-[18px] relative text-center top-[395px]">
                    <img 
                        src="/images/close.png" 
                        className="absolute right-[23px] top-[23px] cursor-pointer" 
                        onClick={onClose}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-between pt-[30px] pb-[61px]">
                        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto]">Оставить отзыв</h2>
                        
                        <div className="flex flex-col gap-[23px]">
                            <div className="flex gap-[5px] justify-end">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <img
                                        key={star}
                                        src={star > rating ? "/images/filled-star.png" : "/images/star.png"}
                                        onClick={() => {
                                            if (rating === star) {
                                                setRating(0);  
                                            } else {
                                                setRating(star);
                                            }
                                        }}
                                        className="cursor-pointer"
                                    />
                                ))}
                            </div>
                            <textarea
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                placeholder="Напишите, каким товаром/услугой воспользовались, что вам понравилось/не понравилось"
                                className="bg-[#F6F6F6] w-[489px] h-[204px] focus:outline-none resize-none rounded-[19px] pt-[17px] px-[20px] text-sm placeholder-[#BDBDBD]"
                            />
                        </div>
                        <button 
                            onClick={handleSubmit}
                            className="w-[355px] h-[50px] bg-[#27AE60] text-white text-sm font-normal rounded-[25px] cursor-pointer"
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveFeedback;