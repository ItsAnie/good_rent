import React from "react";
import "./Review.css";

function Review() {
  const reviewList = [
    {
      image: "/images/user.png",
      name: "Иван Васильевич",
      review:
        "Все супер. Отлично работает, игры в комплекте хорошие. Отлично провели вечер. 10/10",
      date: "27.02.2019",
    },
  ];
  const repeat = 10;

  return (
    <div className="flex flex-col mt-[22px]">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-medium text-[#18A615] font-[Roboto]">Мои отзывы</h2>
        <img src="/images/arow.png" className="arrow w-[11.69px] h-[5.84px]" />
      </div>

      <div className="review-scroll max-h-[759px] w-[765px] overflow-y-auto pr-[17px] scroll-smooth">
            {Array(repeat)
            .fill(reviewList[0])
            .map((item, index) => (
              <div key={index} className="relative w-[738px] h-[162px] mt-[18px]">
                <div className="speech-bubble absolute top-0 left-0 bg-white rounded-b-lg shadow-md z-1 w-[738px]">
                  <div className="flex justify-between w-full">
                      <div className="flex gap-2.5">
                        <img
                          src={item.image}
                          className="w-[40px] h-[40px] rounded-full object-cover"
                          alt={item.name}
                        />
                        <div className="flex flex-col gap-[29px]">
                          <div>
                            <h3 className="font-[Roboto] text-[#2F3C66] font-medium text-xs">
                              {item.name}
                            </h3>
                            <p className="text-sm font-normal max-w-[581px]">
                              {item.review}
                            </p>
                          </div>
                          <p className="text-[#848484] text-sm font-light">{item.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-[5px]">
                        <img src="/images/star.png" className="w-[20px] h-[19px]" />
                        <img src="/images/star.png" className="w-[20px] h-[19px]" />
                        <img src="/images/star.png" className="w-[20px] h-[19px]" />
                        <img src="/images/star.png" className="w-[20px] h-[19px]" />
                        <img src="/images/filled-star.png" className="w-[20px] h-[19px]" />
                      </div>               
                  </div>
                  
                </div>
              </div>
            ))}
        </div>  
    </div>
  );
}

export default Review;
