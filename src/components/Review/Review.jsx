import React from "react";
import "./Review.css";

function Review() {
  const reviewList = [
    {
      image: "/images/user.png",
      name: "Иван Васильевич",
      review:
        "Все супер. Отлично работает, игры в комплекте хорошие. Отлично провели вечер. 10/10",
    },
  ];
  const repeat = 3;

  return (
    <div className="flex flex-col items-start gap-6">
      <h2>Мои отзывы</h2>

      {Array(repeat)
        .fill(reviewList[0])
        .map((item, index) => (
          <div key={index} className="speech-bubble">
            <img src={item.image} className="w-[40px] h-[40px] rounded-full" alt={item.name}/>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm mt-1">{item.review}</p>
          </div>
        ))}
    </div>
  );
}

export default Review;
