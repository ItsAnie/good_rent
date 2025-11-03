import React from "react";
import './Result.css'

function Result(){
    return(
        <div className="result container w-[825px] h-[704px]">
            <div className="card">
                <div className="card-group flex flex-col justify-between
                                border-1 border-solid border-[#18A615] rounded-[20px]
                                h-[704px] w-[825px] pt-[28px] pb-[21px] px-[92px]"
                >
                    <div className="cards flex flex-col gap-[30px]">
                        <div className="flex justify-between w-full">
                            <div>
                                <h2 className="text-2xl font-normal text-[#000000] leading-[16px] mb-[15px]">Приставка Xbox 360</h2>
                                <p className="text-xl TEXT-[#4F4F4F] leading-[16px]">5 000₽ в день</p>
                            </div>
                            <p className="view text-[#BDBDBD] font-normal text-xs max-w-[175px]">150 просмотров (+3 сегодня)
                                №174379387590357</p>
                        </div>

                    
                        <div className="w-full max-w-md mx-auto overflow-hidden">
                            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                                <img src="/images/slide1.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 1" />
                                <img src="/images/Bitmap.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 2" />
                                <img src="/images/slide1.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 3" />
                            </div>
                        </div>

                    
                        <h3 className="font-normal text-sm">Приставка псп в аренду в отличном состоянии. Игры в комплекте</h3>
                        <div className="flex justify-between">
                            <div className="flex gap-1.25">
                                <img src="/images/profile.png" className="w-[50px] h-[50px] rounded-full" />
                                <div className="flex flex-col" style={{gap: '10px'}}>                               
                                    <p style={{maxWidth: '257px', lineHeight: '20px'}}>Константин Константинопольский</p>
                                    <p style={{color: '#BDBDBD', fontSize: '12px'}}>3 объявления</p>
                                    <p style={{fontSize: '14px'}}>+7 935 739 83 94</p>
                                    <p style={{color: '#27AE60', fontSize: '14px'}}>Отзывы</p>
                                </div>
                            </div>

                            <div className="flex flex-col" style={{color: '#BDBDBD', fontSize: '12px', gap: '10px'}}>
                                <p>Тип объявления</p>
                                <p>Категория</p>
                                <p>Адрес</p>
                            </div>

                            <div className="flex flex-col items-end" style={{fontSize: '14px', gap: '10px'}}>
                                <p>Аренда</p>
                                <p>Хобби и развлечения</p>
                                <p>Тургенева,171</p>
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
            </div>
        </div>
    );
}

export default Result;