import React, { createContext, useContext, useState } from "react";

const AdsContext = createContext();

export const AdsProvider = ({ children }) => {
  const [showAds, setShowAds] = useState(false);
  const [selectedAdSlot, setSelectedAdSlot] = useState(null); 
  const [submittedBanner, setSubmittedBanner] = useState(null);
  const [paidBanners, setPaidBanners] = useState({});

  return (
    <AdsContext.Provider value={{ 
      showAds, 
      setShowAds,
      selectedAdSlot,
      setSelectedAdSlot,
      submittedBanner,
      setSubmittedBanner, 
      paidBanners,
      setPaidBanners   
    }}>
      {children}
    </AdsContext.Provider>
  );
};

export const useAds = () => useContext(AdsContext);
