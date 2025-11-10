import React from "react";
import './Result.css'

function Result({ recomendation, onClick, selectedCard }) {
  return (
      <div>
        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto]">Результаты поиска</h2>
        <div className="popular-sections w-[521px] max-h-[1385px] overflow-y-auto pr-[10px] mt-[30px]">
          <div className="popular flex flex-col">
            <div className="flex flex-col gap-[18px]">
              {recomendation.map((item, index) => {
                const isSelected = selectedCard?.id === item.id; 
                return (
                  <div
                    className={`search-scroll flex flex-col cursor-pointer ${
                      isSelected ? "border border-[#18A615] rounded-[8px]" : ""
                    }`}
                    key={index}
                    onClick={() => onClick(item)}
                  >
                    <div className="search-card rounded-[8px] h-[100px] w-full text-xs bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
                      <div className="flex justify-between w-full h-full py-[15px] pl-[22px] pr-[15px]">
                        <div className="flex gap-[10px] items-center h-full">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="bitmap w-[70px] h-[70px]"
                          />
                          <div className="bg-[#EDEEF3] h-[100px] w-[1px]" />
                          <div className="flex flex-col justify-center">
                            <div className="flex gap-[5px]">
                              <h2>{item.title}</h2>
                              <p className="text-[10px] text-[#BDBDBD] max-w-[204px]">{item.type}</p>
                            </div>
                            <div className="flex gap-[5px]">
                              <p className="font-medium font-[Roboto]">{item.price}</p>
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
      </div>
  );
}

export default React.memo(Result);
