import React, { useState, useEffect } from "react";
import Recomendation from "../Recomendation/Recomendation";
import Result from "../Result/Result";
import './Search.css';

const options = [
  { value: "Аренда", label: "Аренда", icon: "/images/Vector5.png" },
  { value: "Услуга", label: "Услуга", icon: "/images/case.png" },
  { value: "Обмен", label: "Обмен", icon: "/images/Vector4.png" },
  { value: "Продажа", label: "Продажа", icon: "/images/money.png" },
  { value: "Даром", label: "Даром", icon: "/images/Vector2.png" },
  { value: "Ищут", label: "Ищут", icon: "/images/search_icon.png" },
];

const options1 = [
  { value: "Личные вещи", label: "Личные вещи", icon: "/images/clothes.png" },
  { value: "Недвижимость", label: "Недвижимость", icon: "/images/buildings.png" },
  { value: "Транспорт", label: "Транспорт", icon: "/images/car.png" },
  { value: "Хобби", label: "Хобби и развлечения", icon: "/images/games.png" },
  { value: "Для дома", label: "Для дома", icon: "/images/house.png" },
  { value: "Гаджеты", label: "Гаджеты и техника", icon: "/images/phone.png" },
  { value: "Питомцы", label: "Питомцы", icon: "/images/pets.png" },
];

const service = [
  { value: "Бытовые услуги", label: "Бытовые услуги", icon: "/images/needle.png" },
  { value: "Юридические услуги", label: "Юридические услуги", icon: "/images/case2.png" },
  { value: "Красота и здоровье", label: "Красота и здоровье", icon: "/images/beauty.png" },
  { value: "IT-услуги", label: "IT-услуги", icon: "/images/computer.png" },
  { value: "Фото- и видеосъемка", label: "Фото- и видеосъемка", icon: "/images/photo.png" },
  { value: "Ремонт и строительство", label: "Ремонт и строительство", icon: "/images/hummer.png" },
  { value: "Другое", label: "Другое", icon: "/images/other.png" },
];

function Search() {
  const [selectedLocation, setSelectedLocation] = useState("location");
  const [selectedOption, setSelectedOption] = useState(null); // first dropdown
  const [selectedCategory, setSelectedCategory] = useState(null); // second dropdown
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [openSub, setOpenSub] = useState(false);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const subOptions = selectedOption?.value === "Ищут"
    ? options.filter(opt => opt.value !== "Ищут")
    : [];

  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
  if (
    selectedOption?.value === "Аренда" ||
    selectedCategory?.value === "Хобби"
  ) {
    setShowResult(true); // բացում է Result
  } else {
    setShowResult(false); // վերադարձնում է Recommendation
  }
}, [selectedOption, selectedCategory]);


  return (
    <div>
      <div className="search-container flex justify-between">
      <div>
        <h2>Что вы ищете?</h2>
        <div className="search-box">
          <img src="/images/Shape.png" className="search-icon" />
          <input type="text" className="search-input" placeholder="Поиск" />
        </div>

        <div className="flex items-start justify-between">
          <div className="location-container flex flex-col">
            {["location", "current", "specify"].map((loc) => (
              <div className="radio-option" key={loc}>
                <input
                  type="radio"
                  id={loc}
                  name="location"
                  value={loc}
                  checked={selectedLocation === loc}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="search-radio"
                />
                <label htmlFor={loc} className="flex">
                  <div className="location-name flex">
                    <span></span>
                    <p>
                      {loc === "location"
                        ? "Локация из профиля"
                        : loc === "current"
                        ? "Текущая локация"
                        : "Указать локацию"}
                    </p>
                  </div>
                  <div className="placeholder-img flex">
                    <img src="/images/placeholder.png" alt="" />
                    <p>
                      {loc === "location"
                        ? "Краснодар, ул. Тургенева 150"
                        : loc === "current"
                        ? "Краснодар, ул Красная 121"
                        : "Указать локацию"}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </div>

          <div className="radius flex flex-col">
            <p>Радиус поиска</p>
            <div className="radius-box flex">
              <input type="text" defaultValue={1} className="radius-inp" />
              <div className="km-m flex flex-col">
                <label htmlFor="km" className="flex justify-between cursor-pointer">
                  Км
                  <input type="radio" name="km-m" id="km" className="km-m-input hidden" defaultChecked />
                  <span className="w-5 h-5 border-2 border-white rounded-full ml-2"></span>
                </label>
                <label htmlFor="m" className="flex justify-between cursor-pointer">
                  М
                  <input type="radio" name="km-m" id="m" className="km-m-input hidden" />
                  <span className="w-5 h-5 border-2 border-white rounded-full ml-2"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Dropdowns */}
        <div className="dropdown-select flex">
          <div className="gap-1.75 flex flex-col">
            <p>Тип объявления</p>
              <div className="category">
                <div className="custom-select">
                    <div className="selected" onClick={() => setOpen(!open)}>
                    {selectedOption ? (
                        <>
                        <img src={selectedOption.icon} alt="" className="icon" />
                        {selectedOption.label}
                        </>
                    ) : (
                        " "
                    )}
                    </div>
                    {open && (
                    <ul className="options">
                        {options.map((opt) => (
                        <li
                            key={opt.value}
                            onClick={() => {
                            setSelectedOption(opt);
                            setOpen(false);

                            if (opt.value === 'Ищут') setOpenSub(true);
                            else setOpenSub(false);
                            setSelectedSubOption(null);
                            }}                         
                        >
                            <img src={opt.icon} alt="" className="icon" />
                            {opt.label}
                        </li>
                        ))}
                    </ul>
                    )}  

                     <div>
                      {/* new dropdown */}
                          {selectedOption?.value === "Ищут" && (
                            <div className="sub-dropdown">
                              <div className="selected" onClick={() => setOpenSub(!openSub)}>
                                {selectedSubOption ? selectedSubOption.label : " "}
                                </div>
                                {openSub && (
                                  <ul className="options">
                                    {subOptions.map(opt => (
                                      <li
                                        key={opt.value}
                                        onClick={() => {
                                          setSelectedSubOption(opt);
                                          setOpenSub(false);
                                        }}
                                      >
                                        <img src={opt.icon} alt="" className="icon" />
                                        {opt.label}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                    </div> 
                </div>
              </div>
            </div>

          {/* stexic */}
          <div className="gap-1.75 flex flex-col">
            <p>Категория</p>
            <div className="category">
              <div className="custom-select">
                <div className="selected" onClick={() => setOpen1(!open1)}>
                  {selectedCategory ? (
                    <>
                      <img src={selectedCategory.icon} alt="" className="icon" />
                      {selectedCategory.label}
                    </>
                  ) : (
                    " "
                  )}
                </div>

                {open1 && (
                  <ul className="options">
                    {(selectedOption?.value === "Услуга" ? service : options1).map((opt) => (
                      <li
                        key={opt.value}
                        onClick={() => {
                          setSelectedCategory(opt);
                          setOpen1(false);
                        }}
                      >
                        <img src={opt.icon} alt="" className="icon" />
                        {opt.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          {/* minchev stex */}
      
          <button className="register-btn search-btn">Искать</button>
        </div>
      </div>
      {showResult ? <Result /> : <Recomendation />}
      <h2 className="question">Хотите быстрее найти клиентов? Разместите <b>рекламный баннер</b>!</h2>
    </div>
  );
}

export default Search;