import React from "react";

function Recomendation(){
    const popular = ([
        {image: '/images/', title: 'Приставка X-BOX 360', price: '10 000 руб./мес'},
        {image: '/images/', title: 'Ремонт X-BOX 360', price: '10 000 руб.'},
        {image: '/images/', title: 'Приставка X-BOX 360', price: ''}
    ]);

    const neither = ([
        {image: '/images/', title: 'Приставка X-BOX 360', price: '10 000 руб./мес'},
        {image: '/images/', title: 'Приставка X-BOX 360', price: '10 000 руб./мес'},
        {image: '/images/', title: 'Приставка X-BOX 360', price: '10 000 руб./мес'}
    ]);

    return(
        <div>
            <div className="popular">
                <h2>Популярные объявления</h2>
            </div>
            <div className="neither">
                <h2>Рядом с вами</h2>
            </div>
            <div className="new">
                <h2>Новые объявления</h2>
            </div>
        </div>
    );
}

export default Recomendation;