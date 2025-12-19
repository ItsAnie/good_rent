import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDefaultRecomendation } from "../../store/slice/recomendationSlice";
import { buildFinalRecommendation } from "../../utils/buildFinalRecommendation";
import { setSelectedCard } from "../../store/slice/allProductsSlice";
import "./Recomendation.css";
import AdSlot from "../Advertising/AdSlot";
import { useAds } from "../../store/AdsContext";

function Recomendation({ searchResults, showAds, style={ }, onSelectedAdSlot, showOnlyFilledAds = false }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { data: defaultRec, loading } = useSelector(state => state.recomendation);
  const user = useSelector(state => state.profile.data);
  const { paidBanners, submittedBanner } = useAds();
  const adSlots = [1, 2] 

  const handleSelectCard = (item) => {
    if (!user) return;
    dispatch(setSelectedCard(item));
    
    const isOwner = item.userId === user.uid;
    if (isOwner) {
      navigate("/card-for-user", { state: { item, forUser: true } });
      } else {
        navigate("/card-for-client", { state: { item, forClient: true } });
      }
    };


  useEffect(() => {
    if (!defaultRec.length) {
      dispatch(fetchDefaultRecomendation());
    }
  }, [dispatch, defaultRec.length]);

  const finalRows = buildFinalRecommendation(searchResults, defaultRec);

  const rowTitles = ["Популярные объявления", "Рядом с вами", "Новые объявления"];

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div className="recomendation-container" style={style}>
      <div className="recomendation container mx-auto">
        <div className="grid-container flex items-center justify-between max-w-[1520px] w-full">
          <div className="grid-scroll flex flex-col gap-[30px]">
            {rowTitles.map((title, rowIndex) => (
              <div key={rowIndex} className="flex flex-col">
                <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] text-left mb-[20px]">
                  {title}
                </h2>
                <div className="grid-box grid grid-cols-3 gap-[20px]">
                  {finalRows[rowIndex].map((item, index) => (
                    <div
                      key={index}
                      className="item rounded-[8px] h-[163px] shadow-[0_2px_10px_rgba(0,0,0,0.07)] cursor-pointer bg-[#FFFFFF]"
                      onClick={() => handleSelectCard(item)}
                    >
                      <div className="flex justify-center border-b border-[#EDEEF3] pt-[9px] pb-[8px]">
                        <div className="text-center text-xs w-[44px] h-[18.8px] bg-[#FFFFFF] rounded-[19px] shadow-[0_2px_10px_rgba(0,0,0,0.07)]">
                          1 км
                        </div>
                        <img src={item.images?.[1]} alt={item.name} className="w-[84px] h-[84px]" />
                        <img src="/images/star.png" className="w-[20px] h-[19px]" />
                      </div>
                      <div className="pt-[9px] pl-[13px] text-xs">
                        <h3 className="font-normal text-[#000000]">{item.name}</h3>
                        <p className="font-medium font-[Roboto]">
                          {item.price && `${item.price} руб.`}
                          {item.rentMax && `/${item.rentMax}`}
                          {item.type === "Обмен" && item.exchange && ` ${item.exchange}`}
                        </p>
                        <p className="text-[10px] text-[#BDBDBD] text-end pr-[13px]">{item.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <img src="./images/Map.png" alt="Map" />
        </div>
      </div>
      {showAds && (
        <div className="flex justify-center items-center mt-[20px] mb-[16px]">
          {adSlots.map((id) => {
            const bannerData = paidBanners[id] || (submittedBanner?.slot === id ? submittedBanner : null);

            if (showOnlyFilledAds && !bannerData) return null; 

            return (
              <AdSlot
                key={id}
                id={id}
                style={{ width: "777px", height: "175px" }}
                bannerData={bannerData} 
                onSelect={onSelectedAdSlot}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Recomendation;
