import React from "react";
import "./Recomendation.css";

function Recomendation() {
  const recomendation = [
    { image: './images/Bitmap.png', title: 'Приставка X-BOX 360', price: '10 000 руб./мес' },
    { image: './images/Bitmap.png', title: 'Приставка X-BOX 360', price: '10 000 руб./мес' },
    { image: './images/Bitmap.png', title: 'Приставка X-BOX 360', price: ' ' },
    
  ];

  return (
    <div className="recomendation-container flex flex-col">
        <div className="recomendation container flex items-center justify-between">
            <div className="popular">
                <div className="items-box mt-5">
                    <h2>Популярные объявления</h2>
                    <div className="items grid grid-cols-3">
                        {recomendation.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="flex fav">
                                <div className="radius-km">1 км</div>
                                <img src={item.image} alt="Объявление" />
                                <img src="/images/star.png" className="star"/>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="items-box mt-5">
                    <h2>Рядом с вами</h2>
                    <div className="items grid grid-cols-3">
                        {recomendation.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="flex fav">
                                <div className="radius-km">1 км</div>
                                <img src={item.image} alt="Объявление" />
                                <img src="/images/star.png" className="star"/>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="items-box mt-5"> 
                    <h2>Новые объявления</h2>
                    <div className="items grid grid-cols-3">
                        {recomendation.map((item, index) => (
                        <div className="item" key={index}>
                            <div className="flex fav">
                                <div className="radius-km">1 км</div>
                                <img src={item.image} alt="Объявление" />
                                <img src="/images/star.png" className="star"/>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <img src="./images/Map.png" alt="Map" />
        </div>
        <h2 className="question">Хотите быстрее найти клиентов? Разместите рекламный баннер!</h2>
    </div>
  );
}

export default Recomendation;
