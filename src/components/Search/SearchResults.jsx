import React from "react";
import Card from "../Cards/Card";
import Result from "../Result/Result";
import AdSlot from "../Advertising/AdSlot";

function SearchResults({
  filteredResult,
  selectedCard,
  onSelectCard,
  showAds,
  setShowAds,
  style={ }
}) {
  if (!filteredResult.length) return null;

  return (
    <>
      <div className="flex justify-between container mx-auto" style={style}>
        <div className="w-[825px] h-full">
          <Card
            selectedCard={selectedCard}
            forSearch
            showAds={showAds}
          />
        </div>

        <Result
          allProducts={filteredResult}
          onClick={onSelectCard}
          selectedCard={selectedCard}
          showAds={showAds}
        />
      </div>

      {showAds && (
        <div className="flex justify-center items-center mt-[66px] mb-[90px] mx-auto w-[1554px]">
          <AdSlot id={1} />
        </div>
      )}
    </>
  );
}

export default SearchResults;
