import React, {useState} from "react";
import { useAds } from "../../store/AdsContext";
import PlaceBanner from "./PlaceBanner";

const AdSlot = ({ id, style, onSelect }) => {
  const [openBanner, setOpenBanner] = useState(false);
  const { paidBanners, submittedBanner, setSelectedAdSlot } = useAds();

  const bannerData = paidBanners[id] || null;

  const handleClick = () => {
    if (!bannerData) { 
      setSelectedAdSlot(id);
      setOpenBanner(true);
      onSelect?.(id);
    }
  }

  return (
    <div 
      style={style} 
      className="group bg-[#E0E0E0] hover:bg-[#98F9A2] h-[175px] w-full flex items-center justify-center cursor-pointer transition-colors duration-300"
      onClick={handleClick}
    > 
        {bannerData ? (
          <div className="flex items-center justify-center w-full h-full bg-no-repeat bg-contain" style={{ backgroundImage: `url(${bannerData.image})` }} >
            <a href={bannerData.link} target="_blank" className="text-[#F2F2F2] text-5xl font-medium font-[Roboto]">
                Advertising Place
            </a>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <h2 className="text-white text-sm font-normal group-hover:hidden">
              Место для рекламы
            </h2>
            <h2 className="text-[#18A615] text-sm font-normal hidden group-hover:flex items-center gap-2">
              Выбрать это место! 
              <img src="/images/check.png" alt="check" className="w-[17px] h-[17px]" />
            </h2>
          </div>
        )}
        {openBanner && 
          <PlaceBanner 
            onClose={() => setOpenBanner(false)} 
            selectedAdSlot={id}
          />}
    </div>
  );
};

export default AdSlot;
