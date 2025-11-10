import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecomendation, selectCard } from "../../store/slice/recomendationSlice";
import "./Recomendation.css";

function Recomendation() {
  const dispatch = useDispatch();
  const { data: recomendation } = useSelector((state) => state.recomendation);

  const rowTitles = ["Популярные объявления", "Недавние объявления", "Лучшие предложения"];

  useEffect(() => {
    if (!recomendation.length) {
      dispatch(fetchRecomendation());
    }
  }, [dispatch, recomendation.length]);

  const handleClickItem = (item) => {
    dispatch(selectCard(item));
  };

  return (
    <div className="recomendation-container flex flex-col mb-[72px]">
      <div className="recomendation container mx-auto pt-[73px]">
        <div className="grid-container flex items-center justify-between w-full">
          <div className="grid-scroll flex flex-col w-[580px] gap-[30px]">
            {rowTitles.map((title, rowIndex) => (
              <div key={rowIndex} className="flex flex-col">
                <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] text-left mb-[20px]">
                  {title}
                </h2>
                <div className="grid-box grid grid-cols-3 gap-[20px]">
                  {recomendation[rowIndex]?.map((item, index) => (
                    <div
                      key={index}
                      className="item rounded-[8px] w-[180px] h-[163px] shadow-[0_2px_10px_rgba(0,0,0,0.07)] cursor-pointer bg-[#FFFFFF]"
                      onClick={() => handleClickItem(item)}
                    >
                      <div className="flex border-b border-[#EDEEF3] pt-[9px] pl-[17px] pb-[8px] items-start justify-start gap-[10px]">
                        <div className="text-center text-xs w-[44px] h-[18.8px] bg-[#FFFFFF] rounded-[19px] shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
                          1 км
                        </div>
                        <img src={item.image} alt="Объявление" className="w-[84px] h-[84px]" />
                        <img src="/images/star.png" className="w-[20px] h-[19px]" />
                      </div>
                      <div className="pt-[9px] pl-[13px] text-xs">
                        <h3 className="font-normal text-[#000000]">{item.title}</h3>
                        <p className="font-medium font-[Roboto]">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <img src="./images/Map.png" alt="Map" />
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
