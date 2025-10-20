import React from "react";

function Search(){
    const locatiuonList = ([
        {location: 'Локация из профиля', street: 'Краснодар, ул. Тургенева 150'},
        {location: 'Текущая локация', street: 'Краснодар, ул Красная 121'},
        {location: 'Указать локацию', street: 'Указать локацию'}
    ]);

    return(
        <div>
            {/* es divy harcakan */}
            <div>
                <div>
                    <h2>Что вы ищете?</h2>
                    <input type="text" className="search-input"  />
                </div>

                <div>
                    <div>
                        <input type="radio" />
                    </div>

                    <div>
                        <p>Радиус поиска</p>
                        <div>

                        </div>
                    </div>
                </div>
                
            </div>
            {/* minchev stex */}

            <div>
                <p> Тип объявления </p>

                {/* dropdwn select petqa lini 2n el */}               
                <select>
                    <option>Аренда</option>
                    <option>Услуга</option>
                    <option>Обмен</option>
                    <option>Продажа</option>
                    <option>Даром</option>
                    <option>Ищут</option>
                    <option></option>
                </select>
            </div>

            <div>
                <p>Категория</p>
                <select>
                    <option> Личные вещи </option>
                    <option> Недвижимость </option>
                    <option>Хобби и развлечения</option>
                    <option>Для дома</option>
                    <option>Гаджеты и техника</option>
                    <option>Питомцы</option>
                </select>
            </div>

            <button>Искать</button>

        </div>
    );
}

export default Search