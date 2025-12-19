import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../store/slice/usersSlice";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { useToggle } from "../../hooks/useToggle";
import "./Review.css";

function Review({ productId, isFeedback = false, isProfile = false, profileUserId }) {
  const dispatch = useDispatch();
  const [isOpen, toggle] = useToggle(true);
  const [reviews, setReviews] = useState([]);
  const users = useSelector(state => state.users.data);
  const products = useSelector(state => state.allProducts.data)

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchAllUsers());
    }
  }, [users.length, dispatch]);

  useEffect(() => {
    if (isProfile && profileUserId) {
      const reviewRef = ref(database, "reviews");

      onValue(reviewRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const filteredReviews = Object.entries(data)
            .filter(([productId]) => {
              const product = products.find(p => p.id === productId);
              return product?.userId === profileUserId;
            })
            .flatMap(([_, productReviews]) => Object.values(productReviews));

          setReviews(filteredReviews);
        }
      });
    } else if (productId) {
      const reviewRef = ref(database, `reviews/${productId}`);
      onValue(reviewRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const reviewsArray = Object.values(data);
          setReviews(reviewsArray);
        }
      });
    }
  }, [productId, isProfile, profileUserId, products]);

  return (
    <div className={`flex flex-col ${!isFeedback ? "mt-[40px]" : ""}`}>
      {!isFeedback && isProfile && (
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggle}>
          <h2 className="text-xl font-medium text-[#18A615] font-[Roboto]">Мои отзывы</h2>
          <img src={isOpen ? "/images/arow.png" : "/images/arow-down.png"} className="arrow w-[11.69px] h-[5.84px]" />
        </div>
      )}

      {isOpen && reviews.length > 0 && (
        <div className="flex flex-col gap-[23px] review-scroll max-h-[759px] w-[765px] overflow-y-auto pr-[17px] scroll-smooth mt-[18px]">
          {reviews.map((item, index) => {
            const reviewUser = users.find(u => u.uid === item.userId);
            return (
                <div 
                  className="speech-bubble relative top-0 left-[25px] bg-white rounded-[8px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] w-[713px]
                            pt-[11px] pl-[5px] pr-[14px] pb-[20px]"
                >
                  <div className="w-full bg-white">
                    <div className="flex gap-2.5 mt-[20px] w-full">
                      <img
                        src={reviewUser?.image || "/images/filled-user.png"}
                        className="w-[40px] h-[40px] rounded-full object-cover flex-shrink-0"
                        alt={reviewUser?.name}
                      />
                      <div className="flex flex-col gap-[29px]">
                        <div className="mt-[10px] flex flex-col gap-[5px]">
                          <h3 className="font-[Roboto] text-[#2F3C66] font-medium text-xs">
                            {reviewUser?.name || "Анонимный пользователь"}
                          </h3>
                          <p className="text-sm font-normal !max-w-[581px]">
                            {item.text}
                          </p>
                        </div>
                        <p className="text-[#848484] text-sm font-light">{item.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-[5px] h-[19px] absolute right-[14px] top-[11px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img
                          key={star}
                          src={star > item.rating ? "/images/filled-star.png" : "/images/star.png"}
                          className="w-[20px] h-[19px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Review;
