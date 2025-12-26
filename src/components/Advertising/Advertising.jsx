import React, { useEffect } from "react";
import Recomendation from "../Recomendation/Recomendation";
import SearchResults from "../Search/SearchResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, setSelectedCard } from "../../store/slice/allProductsSlice";

function Advertising() {
  const dispatch = useDispatch();
  const { data: products, selectedCard, loading } = useSelector(state => state.allProducts);
  useEffect(() => {
    if (!loading) dispatch(fetchAllProducts());
  }, [loading, dispatch]);

  const handleClick = (item) => {
    dispatch(setSelectedCard(item));
  };

  useEffect(() => {
    if (!selectedCard && products.length > 0) {
      dispatch(setSelectedCard(products[0]));
    }
  }, [selectedCard, products, dispatch]);


  return (
    <div className="flex flex-col gap-[60px] mx-auto max-w-[1520px] min-h-screen mt-[91px]">
      <div className="text-xs leading-[24px]">
        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] mb-[10px]">
          Рекламный баннер на главной
        </h2>
        <p>Стоимость размещения - 249$ в неделю. При покупке на месяц реклама в социальных сетях - бесплатно!</p>
        <p>Хронометраж - 15 секунд.</p>
        <p>Периодичность  показа - раз в 3 минуты.</p>
        <p className="mt-[11px]">Выбрать место для баннера:</p>
        <div className="p-[18px]">
          <Recomendation 
            searchResults={products}
            showAds={true}
            onSelectedAdSlot={handleClick}
          />
        </div>
      </div>
      <div className="text-xs leading-[24px]">
        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] mb-[10px]">
          Рекламный баннер в отдельной рубрике объявлений
        </h2>
        <p>Стоимость размещения - 249$ в неделю. При покупке на месяц реклама в социальных сетях - бесплатно!</p>
        <p>Хронометраж - 15 секунд.</p>
        <p>Периодичность  показа - раз в 3 минуты.</p>
        <p className="mt-[11px]">Выбрать место для баннера:</p>

        <div className="p-[18px]">
          <SearchResults
            filteredResult={products}
            selectedCard={selectedCard}
            onSelectCard={handleClick}
            showAds={true}
            setShowAds={() => {}} 
          />
        </div>
      </div>
    </div>
  );
}

export default Advertising;
