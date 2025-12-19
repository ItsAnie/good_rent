import React, { useRef, useState, useEffect } from "react";


function ImageCarousel({ images = [] }) {
  const scrollContainerRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!scrollContainerRef.current) return;
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [images]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative overflow-y-hidden">
      {isOverflowing && (
        <div className="absolute left-0 top-0 w-[266px] h-[292px] bg-gradient-to-r from-white to-transparent pointer-events-none z-[5]" />
      )}

      {isOverflowing && (
        <div className="absolute right-0 top-0 w-[80px] h-[292px] bg-gradient-to-l from-white to-transparent pointer-events-none z-[5]" />
      )}

      <div className="flex items-center relative h-[170px] overflow-y-hidden">
        {isOverflowing && (
          <img
            src="/images/prev.png"
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 cursor-pointer"
          />
      )}

    <div
      ref={scrollContainerRef}
      className="flex gap-[12px] h-full mx-auto overflow-x-auto overflow-y-hidden scrollbar-hide px-10"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 w-[305px] h-full bg-[#FFFFFF] 
                     flex justify-center items-center 
                     shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className={`object-cover h-full rounded-[6.4px] ${index !== 1 ? " w-full" : ""}`}
          />
        </div>
      ))}
    </div>

    {isOverflowing && (
      <img
        src="/images/next.png"
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 cursor-pointer"
      />
    )}
  </div>
</div>

  );
}

export default ImageCarousel;
