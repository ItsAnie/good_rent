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

  useEffect(() => {
    if (!scrollContainerRef.current || images.length === 0) return;

    const container = scrollContainerRef.current;
    const slideWidth = 305 + 12;

    container.scrollLeft = slideWidth * 1 - container.clientWidth / 2 + slideWidth / 2;
  }, [images]);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = 305 + 12;

    if (direction === "left") {
      container.scrollBy({ left: -slideWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative overflow-hidden">
      {isOverflowing && (
        <div className="absolute left-0 top-0 w-[80px] h-[292px] bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      )}
      {isOverflowing && (
        <div className="absolute right-0 top-0 w-[80px] h-[292px] bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      )}

      <div className="flex items-center relative overflow-hidden">
        {isOverflowing && (
          <img
            src="/images/prev.png"
            onClick={() => scroll("left")}
            className="absolute left-0 z-20 cursor-pointer"
          />
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-[12px] h-full mx-auto overflow-x-auto overflow-y-hidden scrollbar-hide py-2"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[305px] h-[170px] bg-white flex justify-center items-center shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
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
