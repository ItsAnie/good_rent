import React from "react";
import './Result.css'

function Result(){
    const resultList = [{image: '/images/Bitmap.png', title: 'Приставка X-BOX 360', value: '10 000 руб.'}]
    const repeatCount = 42;

    return(
        <div className="flex justify-between result container">
            <div className="card">
                <div className="card-group flex flex-col justify-between">
                    <div className="cards flex flex-col">
                        <div className="flex justify-between w-full">
                            <div className="vernagir">
                                <h2>Приставка Xbox 360</h2>
                                <p>5 000₽ в день</p>
                            </div>
                            <p className="view">150 просмотров (+3 сегодня)
                                №174379387590357</p>
                        </div>

                    
                        <div className="w-full max-w-md mx-auto overflow-hidden">
                            <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                                <img src="/images/slide1.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 1" />
                                <img src="/images/Bitmap.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 2" />
                                <img src="/images/slide1.png" className="w-32 h-32 object-cover rounded-lg snap-start" alt="Image 3" />
                            </div>
                        </div>

                    
                        <h3>Приставка псп в аренду в отличном состоянии. Игры в комплекте</h3>
                        <div className="flex justify-between">
                            <div className="flex gap-1.25">
                                <img src="/images/profile.png" className="profile-img" />
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

                    <div className="remember flex flex-col justify-center">
                        <h3>Напомнить, когда станет доступно</h3>
                        <p style={{maxWidth: '203px'}}>Минимальный срок аренды 1 день
                            Максимальный — 1 месяц</p>
                        <button>Написать</button>
                    </div>
                </div>

                <img src="/images/Map.png" className="map" />
            </div>

            <div className="search-result">
                <h3>Результаты поиска</h3>

                <div className="search-scroll flex flex-col gap-[18px]">
                    {Array(repeatCount).fill(resultList[0]).map((item, index) => (
                    <div className="search-card" key={index}>
                        <div className="flex justify-between">
                        <div className="flex" style={{ gap: "10px" }}>
                            <img src={item.image} alt={item.title} className="bitmap" />
                            <div>
                            <div className="flex" style={{ gap: "5px" }}>
                                <h2>{item.title}</h2>
                                <p className="item-view">Аренда</p>
                            </div>
                            <div className="flex" style={{ gap: "5px" }}>
                                <p>{item.value}</p>
                                <p className="item-view">ул. Тургенева 150</p>
                            </div>
                            <p className="item-view">
                                151 просмотр (+2 сегодня) Действительно до 28.02.2019
                            </p>
                            </div>
                        </div>
                        <div
                            className="flex"
                            style={{
                            color: "#F9BD00",
                            fontSize: "8px",
                            gap: "5px",
                            fontFamily: "Roboto",
                            }}
                        >
                            <img src="/images/star.png" className="star" />
                            <p>3</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

        </div>
    );
}

export default Result;