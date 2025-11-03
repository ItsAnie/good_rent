import React, { useState } from "react";
import Result from "../Result/Result";
import "./Recomendation.css";

function Recomendation() {
  const rowTitles = ["Популярные объявления", "Недавние объявления", "Лучшие предложения"];

  const recomendation = [
    // row 1 items
    [
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб./мес" },
      { image: "./images/Bitmap.png", title: "Ремонт X-BOX 360", price: "10 000 руб." },
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "" },
    ],
    // row 2 items
    [
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб./мес" },
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "Приставка PSP/Смартф..." },
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "2 000 руб./день" },
    ],
    // row 3 items
    [
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб./мес" },
      { image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб." },
      { image: "./images/Bitmap.png", title: "Монитор LG", price: "10 000 руб." }
    ]
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const handleClickItem = (item) => setSelectedCard(item);

  return (
    <div className="recomendation-container flex flex-col mb-[72px]">
      <div
        className={`recomendation container mx-auto pt-[73px] transition-all duration-300 ${
          selectedCard ? "flex flex-col" : "flex flex-col items-center"
        }`}
      >
        {selectedCard ? (
          <div className="flex justify-between gap-[20px]">
            <div className="left-section flex flex-col gap-[30px] w-[825px]">
              <Result selectedCard={selectedCard} recomendation={recomendation} />
              <img
                src="./images/Map.png"
                alt="Map"
                className="rounded-[20px] w-full"
              />
            </div>
            <div>
              <h2 className="text-[#18A615] text-xl font-medium font-[Roboto]">Результаты поиска</h2>
              <div className="popular-sections w-[521px] max-h-[1000px] flex flex-col gap-[30px] overflow-y-auto pr-[10px] mt-[30px]">
              <PopularSection
                recomendation={recomendation}
                onClick={handleClickItem}
                rowIndex={0}
              />
            </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col w-[580px] gap-[30px]">
              {rowTitles.map((title, rowIndex) => (
                <div key={rowIndex} className="flex flex-col">
                  <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] text-left mb-[20px]">
                    {title}
                  </h2>

                  <div className="grid grid-cols-3 gap-[20px]">
                    {recomendation[rowIndex].map((item, index) => (
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
            <img src="/images/Map.png" alt="Map" />
          </div>
        )}
      </div>
    </div>
  );
}

function PopularSection({ recomendation, onClick }) {
  return (
    <div className="popular flex flex-col">
      <div className="flex flex-col gap-[18px] overflow-hidden">
        {/* flatten որ բոլոր 9 հայտարարությունները երևան */}
        {recomendation.flat().map((item, index) => (
          <div
            className="search-scroll flex flex-col scroll-smooth pr-[15px]"
            key={index}
            onClick={() => onClick(item)}
          >
            <div className="search-card rounded-[8px] h-[100px] w-[496px] text-xs bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.07)] cursor-pointer">
              <div className="flex justify-between w-full h-full py-[15px] pl-[22px] pr-[15px]">
                <div className="flex gap-[10px] items-center h-full">
                  <img src={item.image} alt={item.title} className="bitmap w-[70px] h-[70px]" />
                  <div className="bg-[#EDEEF3] h-[100px] w-[1px]" ></div>
                  <div className="flex flex-col justify-center">
                    <div className="flex gap-[5px]">
                      <h2>{item.title}</h2>
                      <p className="text-[10px] text-[#BDBDBD] max-w-[204px]">Аренда</p>
                    </div>
                    <div className="flex gap-[5px]">
                      <p>{item.price}</p>
                      <p className="text-[10px] text-[#BDBDBD] max-w-[204px]">ул. Тургенева 150</p>
                    </div>
                    <p className="text-[10px] text-[#BDBDBD] max-w-[204px] mt-[7px]">
                      151 просмотр (+2 сегодня) Действительно до 28.02.2019
                    </p>
                  </div>
                </div>
                <div className="flex text-[#F9BD00] text-[8px] gap-[5px] font-[Roboto]">
                  <img src="/images/star.png" className="w-[11px] h-[10px]" />
                  <p>3</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Recomendation;
