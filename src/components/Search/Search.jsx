import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import Recomendation from "../Recomendation/Recomendation";
import Result from "../Result/Result";
import './Search.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchRecomendation, selectCard } from "../../store/slice/recomendationSlice";
import { fetchOptions } from "../../store/slice/optionsSlice";
import { fetchLocation } from "../../store/slice/locationSlice";
import Popular from "../Popular/Popular";

function Search() {
  const dispatch = useDispatch();

  const location = [
  { id: 1, name: "Локация из профиля", address: "Краснодар, ул. Тургенева 150" },
  { id: 2, name: "Текущая локация", address: "Краснодар, ул Красная 121" },
  { id: 3, name: "Указать локацию", address: "Указать локацию" }
]

  //REDUX STATE
  const { data: recomendation, selectedCard, loading } = useSelector(state => state.recomendation);
  const { options, options1, service } = useSelector(state => state.options);

  //LOCAL STATE
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [openSub, setOpenSub] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [applyFilter, setApplyFilter] = useState(false);

  //DERIVED VALUES
  const allItems = useMemo(() => recomendation.flat(), [recomendation]);

  const filteredResult = useMemo(() => {
    if (!applyFilter) return [];
    return allItems.filter(item => {
      const matchesSearch = searchTerm
        ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesType = selectedOption
        ? item.type === selectedOption.value
        : true;
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory.label || item.category === selectedCategory.value
        : true;
      const matchesAddress = selectedLocation 
        ? item.address === selectedLocation
        : true;
        
      return matchesSearch && matchesType && matchesCategory && matchesAddress;
    });
  }, [applyFilter, allItems, searchTerm, selectedOption, selectedCategory]);

  const subOptions = useMemo(() => {
    return selectedOption?.value === "Ищут"
      ? options.filter(opt => opt.value !== "Ищут")
      : [];
  }, [selectedOption, options]);

  //DATA FETCHING
  useEffect(() => {
    if (!recomendation.length) dispatch(fetchRecomendation(null));
    dispatch(fetchOptions());
    dispatch(fetchLocation());
  }, [dispatch]);

  //DEFAULT SELECTED CARD
  useEffect(() => {
    if (!selectedCard && allItems.length > 0) {
      dispatch(selectCard(allItems[0]));
    }
  }, [allItems, selectedCard, dispatch]);

  //AUTO SELECT FIRST FILTERED CARD
  useEffect(() => {
    if (filteredResult.length > 0) {
      dispatch(selectCard(filteredResult[0]));
    }
  }, [filteredResult, dispatch]);

  //location
  useEffect(() => {
    if(location.length && !selectedLocation){
      setSelectedLocation(location[0].address)
    }
  },[location, selectedLocation])

  return (
    <div>
      <div className="search-container flex justify-between bg-gradient-to-b 
                      from-[#3CC742] to-[#C2FFC5] rounded-b-[20px] mx-auto 
                      max-w-[1520px] h-[246px] pt-[31px] px-[50px] items-start"
      >
      <div>
        <h2 className="text-center font-medium text-2xl">Что вы ищете?</h2>
        <div className="pt-[23px]">
          <div className="search-box relative flex items-center">
            <img src="/images/Shape.png" className="absolute left-[20px] text-[#BDBDBD]" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:outline-none w-full rounded-[19px] border-none bg-[#F6F6F6] w-[531px] 
                        h-[50px] text-sm pt-[8px] pr-[8px] pb-[8px] pl-[35px] placeholder-[#BDBDBD]" 
              placeholder="Поиск" 
            />
          </div>

          <div className="flex items-start justify-between">
            <div className="location-container flex flex-col mt-[10px]">
              {location && location.map((loc) => (
                <div className="radio-option flex items-center" key={loc.id}>
                  <input
                    type="radio"
                    id={loc.id}
                    name="location"
                    value={loc.address}
                    checked={selectedLocation === loc.address}
                    onChange={(e) => setSelectedLocation(loc.address)}
                    className="search-radio"
                  />
                  <label htmlFor={loc.id} className="flex gap-[11px]">
                    <div className="location-name flex">
                      <span></span>
                      <p className="max-w-[65px]">{loc.name}</p>
                    </div>
                    <div className="placeholder-img flex gap-[5.7px] text-sm">
                      <img src="/images/placeholder.png" alt="" className="w-[16.3px] h-[20px]" />
                      <p>{loc.address}</p>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            <div className="radius flex flex-col text-xs font-medium pt-[9px] gap-[5px] ml-[46px]">
              <p>Радиус поиска</p>
              <div className="radius-box flex gap-[14px]">
                <input type="text" 
                      defaultValue={1} 
                      className="bg-[#F6F6F6] text-[#000000] w-[94px] h-[50px]
                                text-sm font-medium font-[Montserrat] rounded-[19px] pl-[27px]
                                shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] focus:outline-none" 
                />
                <div className="flex flex-col gap-[9px]">
                  <label htmlFor="km" className="flex justify-between cursor-pointer text-sm">
                    Км
                    <input type="radio" name="km-m" id="km" className="km-m-input hidden" defaultChecked />
                    <span className="w-5 h-5 border-2 border-white rounded-full ml-2"></span>
                  </label>
                  <label htmlFor="m" className="flex justify-between cursor-pointer text-sm">
                    М
                    <input type="radio" name="km-m" id="m" className="km-m-input hidden" />
                    <span className="w-5 h-5 border-2 border-white rounded-full ml-2"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Dropdowns */}
        <div className="dropdown-select flex gap-[30px] pt-[23px] items-center">
          <div className="gap-1.75 flex flex-col">
            <p>Тип объявления</p>
              <div className="relative w-[222px] bg-[#F6F6F6] rounded-[19px] 
                              transition-[height] duration-300 ease-in-out"
              >
                <div className="relative w-full max-h-[259px] font-[Montserrat]">
                    <div className="bg-[#F6F6F6] py-[10px] px-[15px] rounded-[19px]
                                    shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] flex items-center
                                    gap-[10px] h-[50px] text-xs" 
                          onClick={() => setOpen(!open)}>
                    {selectedOption ? (
                        <>
                        <img src={selectedOption.icon} alt="" className="h-[20px]" />
                        {selectedOption.label}
                        </>
                    ) : (
                        " "
                    )}
                    </div>
                    {open && (
                    <ul className="absolute top-[100%] left-0 w-full z-[9999] flex flex-col gap-[9px] 
                                  rounded-b-[19px] list-none p-0 overflow-y-hidden py-[5px] px-[15px]
                                  bg-[#F6F6F6]">
                        {options && options.map((opt) => (
                        <li
                            className="cursor-pointer flex items-center gap-[16px] text-xs hover:bg-[#f0f0f0]"
                            key={opt.value}
                            onClick={() => {
                            setSelectedOption(opt);
                            setOpen(false);

                            if (opt.value === 'Ищут') setOpenSub(true);
                            else setOpenSub(false);
                            setSelectedSubOption(null);
                            }}                         
                        >
                            <img src={opt.icon} alt="" className="h-[20px]" />
                            {opt.label}
                        </li>
                        ))}
                    </ul>
                    )}  

                     <div>
                      {/* new dropdown */}
                          {selectedOption?.value === "Ищут" && (
                            <div className="sub-dropdown absolute top-[72px] left-0 w-full">
                              <div className="bg-[#F6F6F6] py-[10px] px-[15px] rounded-[19px]
                                            shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] flex items-center
                                            gap-[10px] h-[50px] text-xs" 
                                    onClick={() => setOpenSub(!openSub)}>
                                {selectedSubOption ? selectedSubOption.label : " "}
                                </div>
                                {openSub && (
                                  <ul className="absolute top-[100%] left-0 w-full z-[9999] flex flex-col gap-[9px] 
                                                rounded-b-[19px] list-none p-0 overflow-y-hidden py-[5px] px-[15px]
                                                bg-[#F6F6F6]">
                                    {subOptions.map(opt => (
                                      <li
                                        className="cursor-pointer flex items-center gap-[16px] text-xs hover:bg-[#f0f0f0]"
                                        key={opt.value}
                                        onClick={() => {
                                          setSelectedSubOption(opt);
                                          setOpenSub(false);
                                        }}
                                      >
                                        <img src={opt.icon} alt="" className="w-[20px] h-[20px]" />
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
          <div className="gap-1.75 flex flex-col">
            <p>Категория</p>
            <div className="relative w-[222px] bg-[#F6F6F6] rounded-[19px] 
                            transition-[height] duration-300 ease-in-out">
              <div className="relative w-full max-h-[259px] font-[Montserrat]">
                <div className="bg-[#F6F6F6] py-[10px] px-[15px] rounded-[19px]
                                shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)] flex items-center
                                gap-[10px] h-[50px] text-xs" 
                      onClick={() => setOpen1(!open1)}>
                  {selectedCategory ? (
                    <>
                      <img src={selectedCategory.icon} alt="" className="w-[20px] h-[20px]" />
                      {selectedCategory.label}
                    </>
                  ) : (
                    " "
                  )}
                </div>

                {open1 && (
                  <ul className="absolute top-[100%] left-0 w-full z-[9999] flex flex-col gap-[9px] 
                                rounded-b-[19px] list-none p-0 overflow-y-hidden py-[5px] px-[15px]
                                bg-[#F6F6F6]"
                  >
                    {(selectedOption?.value === "Услуга" ? service : options1).map((opt) => (
                      <li
                        className="cursor-pointer flex items-center gap-[16px] text-xs hover:bg-[#f0f0f0]"
                        key={opt.value}
                        onClick={() => {
                          setSelectedCategory(opt);
                          setOpen1(false);
                        }}
                      >
                        <img src={opt.icon} alt="" className="w-[20px] h-[20px]" />
                        {opt.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <button 
            className="shadow-none text-white font-normal bg-[#27AE60] rounded-[25px] 
                      w-[228px] h-[50px] text-sm cursor-pointer mt-[23px]"
                      onClick={() => setApplyFilter(true)}>
                        Искать
          </button>
        </div>
      </div>
      
      {filteredResult.length === 0 && <Recomendation />}
      <div className="flex justify-between container mx-auto pt-[73px]">
      {filteredResult.length > 0 && (
        <>
        <Popular selectCard={selectedCard} />
          <Result 
            recomendation={filteredResult}
            onClick={(item) => dispatch(selectCard(item))}
            selectedCard={selectedCard}
          />
          
        </>
      )}
    </div>
      <h2 className="mt-[40px] mb-[49px] text-center text-xl font-medium text-[#18A615]">Хотите быстрее найти клиентов? Разместите <b>рекламный баннер</b>!</h2>
    </div>
  );  
}

export default Search;