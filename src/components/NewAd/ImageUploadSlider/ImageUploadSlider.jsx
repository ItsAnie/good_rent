import React, { useState, useEffect, useRef } from "react";
import "./ImageUploadSlider.css";

function ImageUploadSlider({ onImagesChange, imageFiles }) {
  const fillInputRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (imageFiles.length === 0) {
        setSelectedImages([]);
    }
}, [imageFiles]);


  useEffect(() => {
    const checkOverflow = () => {
      if (!scrollContainerRef.current) return;
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [selectedImages]);

  const handleImageClick = () => fillInputRef.current.click();

  const handleFileChange = (e) => {
  const files = Array.from(e.target.files);

  if (selectedImages.length + files.length > 10) {
    alert("Вы можете выбрать не более 10 изображений");
    return;
  }

  const newPreviews = files.map((file) => URL.createObjectURL(file));

  setSelectedImages((prev) => [...prev, ...newPreviews]);

  onImagesChange([...imageFiles, ...files]);
};


  const handleDeleteImage = (indexToDelete) => {
    setSelectedImages((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full relative">

      {isOverflowing && (
        <div className="absolute left-0 top-0 w-[266px] h-[292px] bg-gradient-to-r from-white to-transparent pointer-events-none z-[5]" />
      )}

      {isOverflowing && (
        <div className="absolute right-0 top-0 w-[80px] h-[292px] bg-gradient-to-l from-white to-transparent pointer-events-none z-[5]" />
      )}

      <div className="flex items-center relative h-[250px]">

        {isOverflowing && (
          <img
            src="/images/prev.png"
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 cursor-pointer"
          />
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-[29px] h-full mx-auto overflow-x-auto scrollbar-hide px-10"
        >
          {selectedImages.length > 0 ? (
            selectedImages.map((img, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[250px] h-full bg-[#F2F2F2] 
                           flex justify-center items-center rounded-[8px] 
                           shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
              >
                <img
                  onClick={() => handleDeleteImage(index)}
                  src="/images/delete_ad.png"
                  className="absolute -top-2 -right-2 cursor-pointer"
                />
                <img
                  src={img}
                  alt="uploaded"
                  className="w-full h-full object-cover rounded-[8px]"
                />
              </div>
            ))
          ) : (
            <div className="w-[250px] h-full bg-[#F2F2F2] 
                            flex justify-center items-center rounded-[8px] 
                            shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
            >
              <img src="/images/photo-camera.png" className="w-[100px] h-[80px]" />
            </div>
          )}
        </div>

        {isOverflowing && (
          <img
            src="/images/next.png"
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 cursor-pointer"
          />
        )}
      </div>

      <p
        onClick={handleImageClick}
        className="text-base font-normal text-[#18A615] text-center underline decoration-[#18A615] cursor-pointer mt-3 mx-auto w-[240px]"
      >
        Добавить фото (не более 10)
      </p>

      <input
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        ref={fillInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ImageUploadSlider;
