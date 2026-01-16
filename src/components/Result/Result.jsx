import React from "react";
import './Result.css'
import AdSlot from "../Advertising/AdSlot";
import { useScrollGradient } from "../../hooks/useScrollGradient";

function Result({ allProducts, onClick, selectedCard, showAds }) {
  const scrollRef = useScrollGradient([allProducts.length]);
  
  return (
      <div className="flex flex-col items-end w-[521px]">
        <h2 className="hidden lg:block text-[#18A615] text-xl font-medium font-[Roboto]">Результаты поиска</h2>
        <div 
          ref={scrollRef}
          className="popular-sections w-full max-h-[1398 px] overflow-y-auto lg:pr-[10px] pb-[18px] mt-[30px] px-[21px] lg:px-none">
          <div className="popular flex flex-col">
            <div className="flex flex-col gap-[18px]">
              {allProducts.map((item, index) => {
                const isSelected = selectedCard?.id === item.id; 
                return (
                  <div
                    className={`search-scroll flex flex-col cursor-pointer ${
                      isSelected ? "lg:border border-[#18A615] rounded-[8px]" : ""
                    }`}
                    key={index}
                    onClick={() => onClick(item)}
                  >
                    <div className="search-card rounded-[8px] h-[100px] w-full text-xs bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
                      <div className="flex justify-between w-full h-full py-[15px] pl-[22px] pr-[15px]">
                        <div className="flex gap-[10px] items-center h-full">
                          <img
                            src={item.images?.[1]}
                            alt={item.name}
                            className="bitmap w-[70px] h-[70px]"
                          />
                          <div className="bg-[#EDEEF3] h-[100px] w-[1px]" />
                          <div className="flex flex-col justify-center">
                            <div className="flex gap-[5px]">
                              <h2>{item.name}</h2>
                              <p className="text-[10px] text-[#BDBDBD] max-w-[204px]">{item.type}</p>
                            </div>
                            <div className="flex gap-[5px]">
                              <p className="font-medium font-[Roboto]">{item.price} руб.</p>
                              <p className="text-[10px] text-[#BDBDBD] max-w-[204px]">{item.address}</p>
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
                );
              })}
            </div>
          </div>
        </div>
        {showAds && (
        <div className="mt-[41px] flex flex-col gap-[38px] w-[620px]">
          <AdSlot id={5} />
          <AdSlot id={6} />
        </div>
        )}
      </div>
  );
}

export default React.memo(Result);
