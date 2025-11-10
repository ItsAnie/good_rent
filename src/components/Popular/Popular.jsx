import React from "react";
import './Popular.css'

function Popular({ selectCard }){
    if (!selectCard) return null;

    return(
        <div className="result w-[825px]">
            <div className="card flex flex-col gap-[56px]">
                <div className="card-group flex flex-col justify-between
                                border border-[#18A615] rounded-[20px]
                                h-[704px] w-[825px] pt-[28px] pb-[21px] px-[92px]"
                >
                    <div className="cards flex flex-col gap-[30px]">
                        <div className="flex justify-between w-full">
                            <div>
                                <h2 className="text-2xl font-normal text-[#000000] leading-[16px] mb-[15px]">{selectCard.title}</h2>
                                <p className="text-xl TEXT-[#4F4F4F] leading-[16px]">{selectCard.price}</p>
                            </div>
                            <p className="view text-[#BDBDBD] font-normal text-xs max-w-[175px]">150 просмотров (+3 сегодня)
                                №174379387590357</p>
                        </div>

                    
                        <div className="w-full max-w-md mx-auto overflow-hidden">
                            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                                <img src="/images/slide1.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 1" />
                                <img src={selectCard.image} className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 2" />
                                <img src="/images/slide1.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 3" />
                            </div>
                        </div>

                    
                        <h3 className="font-normal text-sm">Приставка псп в аренду в отличном состоянии. Игры в комплекте</h3>
                        <div className="flex justify-between">
                            <div className="flex gap-1.25">
                                <img src="/images/profile.png" className="w-[50px] h-[50px] rounded-full" />
                                <div className="flex flex-col gap-[10px]">                               
                                    <p className="max-w-[257px] leading-[20px]">Константин Константинопольский</p>
                                    <p className="text-[#BDBDBD] text-xs">3 объявления</p>
                                    <p className="text-sm">+7 935 739 83 94</p>
                                    <p className="text-[#27AE60] text-sm">Отзывы</p>
                                </div>
                            </div>

                            <div className="flex flex-col text-[#BDBDBD] text-xs gap-[10px]">
                                <p>Тип объявления</p>
                                <p>Категория</p>
                                <p>Адрес</p>
                            </div>

                            <div className="flex flex-col items-end gap-[10px] text-sm">
                                <p>{selectCard.type}</p>
                                <p>{selectCard.category}</p>
                                <p>{selectCard.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className="remember flex flex-col justify-center mx-auto text-xs font-normal text-[#BDBDBD] leading-[16px] items-center">
                        <h3 className="mb-[28px] text-sm text-[#18A615]">Напомнить, когда станет доступно</h3>
                        <p className="max-w-[203px]">Минимальный срок аренды 1 день
                            Максимальный — 1 месяц</p>
                        <button className="text-white bg-[#27AE60] text-sm w-[355px] h-[50px] rounded-[25px] border-none mt-[14px] cursor-pointer">
                            Написать
                        </button>
                    </div>
                </div>
                <img src="/images/Map.png" alt="Map" />
            </div>
        </div>
    );
}

export default Popular;