import React, { useState, useEffect, useMemo } from "react";
import Recomendation from "../Recomendation/Recomendation";
import './Search.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, setSelectedCard } from "../../store/slice/allProductsSlice";
import Dropdown from "../../Dropdown";
import { setSelectedCategory, setSelectedType } from "../../store/slice/dropdownSlice";
import SearchResults from "./SearchResults";
import RealEstate from "../RealEstate/RealEstate";
import MoreFilters from "../RealEstate/MoreFilters";
import SerachDropdowns from "../SearchDropdowns";

function Search() {
  const dispatch = useDispatch();

  // RESET dropdowns on mount
  useEffect(() => {
    dispatch(setSelectedType(null));
    dispatch(setSelectedCategory(null));
  }, [dispatch]);

  // REDUX STATE
  const selectedType = useSelector(state => state.dropdown.selectedType);
  const selectedCategory = useSelector(state => state.dropdown.selectedCategory);
  const { data: allProducts, selectedCard } = useSelector(state => state.allProducts);
  const { data: profile } = useSelector(state => state.profile);

  // LOCAL STATE
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
  const [appliedType, setAppliedType] = useState(null);
  const [appliedCategory, setAppliedCategory] = useState(null);
  const [applyFilter, setApplyFilter] = useState(false);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleApplyFilter = () => {
    setAppliedSearchTerm(searchTerm);
    setAppliedType(selectedType);
    setAppliedCategory(selectedCategory);
    setApplyFilter(true);
  };

  const handleMoreFilters = () => {
    setShowMoreFilters(true);
  }

  // SET selectedLocation when profile loads
  useEffect(() => {
    if (profile?.location) {
      setSelectedLocation(profile.location);
    }
  }, [profile]);

  // LOCATION options
  const location = [
    { id: 1, name: "Локация из профиля", address: profile?.location || "" },
    { id: 2, name: "Текущая локация", address: "Краснодар, ул. Красная 121" },
    { id: 3, name: "Указать локацию", address: "Указать локацию" }
  ];

  // FILTERED RESULTS
  const filteredResult = useMemo(() => {
    if (!applyFilter || (!appliedSearchTerm && !appliedType && !appliedCategory)) return [];

    return allProducts.filter(item => {
      const matchesSearch = appliedSearchTerm
        ? item.name.toLowerCase().includes(appliedSearchTerm.toLowerCase())
        : true;
      const matchesType = appliedType
        ? item.type === appliedType.value
        : true;
      const matchesCategory = appliedCategory
        ? item.category === appliedCategory.label || item.category === appliedCategory.value
        : true;
      return matchesSearch && matchesType && matchesCategory;
    });
  }, [applyFilter, allProducts, appliedSearchTerm, appliedType, appliedCategory]);


  // FETCH products if empty
  useEffect(() => {
    if (!allProducts.length) dispatch(fetchAllProducts(null));
  }, [allProducts.length, dispatch]);

  // SELECT first card by default
  useEffect(() => {
    if (!selectedCard && allProducts.length > 0) {
      dispatch(setSelectedCard(allProducts[0]));
    }
  }, [allProducts, selectedCard, dispatch]);

  useEffect(() => {
    if (filteredResult.length === 0) return;

    if (!selectedCard || !filteredResult.some(item => item.id === selectedCard.id)) {
      dispatch(setSelectedCard(filteredResult[0]));
    }
  }, [filteredResult, selectedCard, dispatch]);


  return (
    <div className="w-full bg-[#F6F6FA] lg:bg-white">
      <div className="search-container flex lg:justify-between justify-center lg:bg-gradient-to-b 
                      from-[#3CC742] to-[#C2FFC5] rounded-b-[30px] lg:rounded-b-[20px] bg-[#FFFFFF] mx-auto 
                      max-w-[1520px] w-full pt-[31px] pb-[21px] lg:px-[50px] items-start relative z-[60]">
        <div>
          <h2 className="lg:block hidden text-center font-medium font-[Roboto] text-2xl text-[#4F4F4F]">Что вы ищете?</h2>

          <div className="lg:pt-[23px] ">
            {/* SEARCH BOX */}
            <form 
              className="flex flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                handleApplyFilter();
              }}
            >
              <div className="search-box relative flex items-center">
                <img src="/images/Shape.png" className="absolute left-[20px] text-[#BDBDBD]" />
                <input 
                  id="search"
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Поиск"
                  className="focus:outline-none w-full rounded-[19px] border-none bg-[#F6F6F6] w-[531px] 
                            h-[50px] text-sm pt-[8px] pr-[8px] pb-[8px] pl-[35px] placeholder-[#BDBDBD]
                            shadow-[0_2px_10px_0_rgba(0,0,0,0.07)]" 
                />
              </div>
              <div className="lg:hidden">
                <SerachDropdowns selectedType={selectedType}/>
              </div>
            </form>


            <div className="loc-rad flex items-start justify-between text-[#333333]">
              <div className="location-container flex flex-col mt-[10px] gap-[8px]">
                {location.map((loc) => (
                <div className="radio-option flex items-center" key={loc.id}>
                  <input
                    type="radio"
                    id={loc.id}
                    name="location"
                    value={loc.address}           
                    checked={selectedLocation === loc.address}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="search-radio"
                    disabled={loc.id === 1 && !profile?.location} 
                  />
                  <label htmlFor={loc.id} className="flex items-center gap-[6px]">
                    <span></span>
                    <div className="flex flex-col lg:flex-row lg:gap-[11px]">
                      <p className="lg:max-w-[59px] text-[#BDBDBD] lg:text-[#333333] pl-[20px] lg:pl-0">{loc.name}</p>
                      <div className="placeholder-img flex gap-[5.7px] text-xs lg:text-sm">
                        <img src="/images/placeholder.png" alt="" className="w-[16.3px] h-[20px]" />
                        <p className="street">{loc.address}</p>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
              </div>

              {/* RADIUS */}
              <div className="radius flex flex-col text-sm font-medium pt-[9px] gap-[5px] ml-[46px]">
                <p className="text-xs leading-[20px] font-[Roboto] font-medium">Радиус поиска</p>
                <div className="radius-box flex flex-col lg:flex-row gap-[14px] text-black">
                  <input 
                        id="radius"
                        type="text" 
                        defaultValue={1} 
                        className="bg-[#F6F6F6] text-[#000000] w-[94px] h-[50px]
                                  font-medium font-[Montserrat] rounded-[19px] pl-[27px]
                                  shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] focus:outline-none" 
                  />
                  <div className="km-m flex lg:flex-col gap-[9px]">
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
        </div>

        {/* Dropdowns */}
        <div className="hidden lg:block flex flex-col gap-[27px]">
          <div className="dropdown-select lg:flex gap-[30px] pt-[23px] items-center">
            <div className="gap-1.75 flex flex-col">
              <p className="pl-[14px] text-xs font-medium font-[Roboto]">Тип объявления</p>
              <div className="relative w-[222px] font-[Roboto] font-medium text-xs">
                <Dropdown id="type" />
                <div className="absolute top-[72px] w-full z-10">
                  {selectedType?.value === "Ищут" && <Dropdown id="sub" />}
                </div> 
              </div>
            </div>

            <div className="gap-1.75 flex flex-col">
              <p className="pl-[14px] text-xs font-medium font-[Roboto]">Категория</p>
              <div className="relative w-[222px] font-[Roboto] font-medium text-xs">
                <Dropdown id="category" />
              </div>
            </div>

            <button 
              className="lg:block hidden shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] text-white font-normal bg-[#27AE60] rounded-[25px] 
                        w-[228px] h-[50px] text-sm cursor-pointer mt-[23px]"
              onClick={() => handleApplyFilter(true)}>
                Искать
            </button>
          </div>

          {(selectedCategory?.value === "Недвижимость" || selectedCategory?.value === "Транспорт") &&
           <RealEstate onMoreFilters={handleMoreFilters} selectedCategory={selectedCategory} />
          }
        </div>
        <div className="bg-[#BDBDBD] w-[42px] h-[2px] rounded-[1.5px] absolute bottom-[10px] lg:hidden"></div>
      </div>
      {showMoreFilters &&(
        <div className="absolute w-full z-[50]">
          <MoreFilters selectedCategory={selectedCategory} onClose={() => setShowMoreFilters(false)} />
        </div>
      )}

      {/* Results */}
      {filteredResult.length === 0 &&  
        <Recomendation 
          showAds={true} 
          showOnlyFilledAds={true}  
        /> 
      }
      {filteredResult.length > 0 && (
        <SearchResults
          filteredResult={filteredResult}
          selectedCard={selectedCard}
          onSelectCard={(item) => dispatch(setSelectedCard(item))}
        />
      )}
      <h2 className="lg:block hidden mt-[40px] mb-[72px] text-center text-xl font-medium text-[#18A615]">
        Хотите быстрее найти клиентов? Разместите <b>рекламный баннер</b>!
      </h2>
    </div>
  );  
}

export default Search; 
