import React, {useState} from "react";
import { FaSearch } from "react-icons/fa";
import './Search.css'

function Search(){
    const [selected, setSelected] = useState("location");

    return(
        <div className="search-container container flex justify-between">
            {/* es divy harcakan */}
            <div>
                <h2>Что вы ищете?</h2>
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" className="search-input" placeholder="Поиск" />
                </div>

                <div className="flex items-start justify-between w-full">
                     <div className="location-container flex flex-col gap-4">
                        <div className="radio-option">
                            <input
                            type="radio"
                            id="location"
                            name="location"
                            value="location"
                            checked={selected === "location"}
                            onChange={(e) => setSelected(e.target.value)}
                            className="location-input"
                            />
                            <label htmlFor="location" className="flex">
                                <div className="location-name flex">
                                    <span></span>
                                    <p>Локация из профиля</p>
                                </div>
                                <div className="placeholder-img flex">
                                    <img src="/images/placeholder.png" />
                                    <p>Краснодар, ул. Тургенева 150</p>
                                </div>
                            </label>
                        </div>

                        <div className="radio-option">
                            <input
                            type="radio"
                            id="current-location"
                            name="location"
                            value="current"
                            checked={selected === "current"}
                            onChange={(e) => setSelected(e.target.value)}
                            className="location-input"
                            />
                            <label htmlFor="current-location" className="flex">
                                <div className="location-name flex">
                                    <span></span>
                                    <p>Текущая локация</p>
                                </div>
                                <div className="placeholder-img flex">
                                    <img src="/images/placeholder.png" />
                                    <p>Краснодар, ул Красная 121</p>
                                </div>
                            </label>
                        </div>

                        <div className="radio-option">
                            <input
                            type="radio"
                            id="specify-location"
                            name="location"
                            value="specify"
                            checked={selected === "specify"}
                            onChange={(e) => setSelected(e.target.value)}
                            className="location-input"
                            />
                            <label htmlFor="specify-location" className="flex">
                                <div className="location-name flex">
                                    <span></span>
                                    <p>Указать локацию</p>
                                </div>
                                <div className="placeholder-img flex">
                                    <img src="/images/placeholder.png" />
                                    <p>Указать локацию</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="radius flex flex-col">
                        <p>Радиус поиска</p>
                        <div className="radius-box flex">
                            <input type="text" defaultValue={1} className="radius-inp" />
                            <div className="km-m flex flex-col">
                                <label htmlFor="km" className="flex justify-between cursor-pointer">
                                    Km
                                    <input 
                                        type="radio" 
                                        name="km-m" 
                                        id="km"
                                        className="km-m-input hidden"
                                        checked
                                    />
                                    <span className="w-5 h-5 border-2 border-white rounded-full ml-2"></span>
                                </label>
                               
                                <label htmlFor="m" className="flex justify-between cursor-pointer">
                                     M
                                    <input 
                                        type="radio" 
                                        name="km-m" 
                                        id="m"
                                        className="km-m-input hidden"
                                    />
                                    <span className="w-5 h-5 border-2 border-white rounded-full ml-2"></span>
                                </label>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* minchev stex */}

            <div className="flex gap-4">
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

                <button className="register-btn search-btn">Искать</button>
            </div>

        </div>
    );
}

export default Search;