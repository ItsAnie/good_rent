import React, {useState, useEffect, useRef} from "react";

function DaggableContainer({children, className}){
    const containerRef = useRef(null);
    const [startY, setStartY] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const MAX_UP = -410;
    const MAX_DOWN = 0;

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY;
        setStartY(currentY);

        setTranslateY((prev) => {
            let next = prev + diff;
            if (next > MAX_DOWN) next = MAX_DOWN;
            if (next < MAX_UP) next = MAX_UP;
            return next
        });
    };

    return (
        <div
            ref={containerRef}
            style={{
                transform: `translateY(${translateY}px)`,
                transition: "transform 0.3s ease",
                position: "relative"
            }}
            className={`relative bottom-0 left-0 w-full lg:relative z-[60] ${className}`}
        >
            <div
                className="bg-[#BDBDBD] w-[42px] h-[2px] rounded-full absolute bottom-[10px] left-1/2 -translate-x-1/2 lg:hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            />
            {children}
        </div>
  );
}

export default DaggableContainer;