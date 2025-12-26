import React, { useRef, useState } from "react";
import { database } from "../../firebase";
import { push, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { useAds } from "../../store/AdsContext";

function PlaceBanner({ onClose, selectedAdSlot }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [link, setLink] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);
  const {setSubmittedBanner} = useAds();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImageSrc(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const isFormValid = imageSrc && link.trim() !== "";

  const handleSubmit = async () => {
    if (!isFormValid) return;
    
    const auth = getAuth();
    const user = auth.currentUser;

    const bannerRef = push(ref(database, "banners"));
    await set(bannerRef, {
      userId: user.uid,
      image: imageSrc,
      link,
      slot: selectedAdSlot,
      status: "panding",
      timestamp: Date.now()
    });
    setSubmitted(true);
  };

  const handleFinish = () => {
    if (!selectedAdSlot) return;

    setSubmittedBanner({
      image: imageSrc,
      link,
      slot: selectedAdSlot
    });

    onClose();
  };

  return (
    <div className="overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999] flex items-center justify-center cursor-default">
      <div
        className={`overlay-content flex flex-col justify-between items-center w-[650px] pb-[55px] pt-[30px] bg-white rounded-[18px] relative text-sm ${submitted ? "h-[362px]" : "h-[444px]"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/images/close.png"
          className="absolute right-[25px] top-[23px] cursor-pointer"
          onClick={onClose}
        />

        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] mb-4">
          Разместить баннер
        </h2>

        {!submitted && (
          <>
            <div
              onClick={handleImageClick}
              className={`flex flex-col items-center justify-center text-[#18A615] border-[3px] border-dashed border-[#18A615] rounded-[14px] w-[534px] h-[126px]`}
              style={{
                backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {!imageSrc && (
                <>
                  <img
                    src="/images/ad-banner.png"
                    className="cursor-pointer"
                    alt="placeholder"
                  />
                  <p className="max-w-[156px] text-center font-medium font-[Roboto] mt-[12px]">
                    Размер изображения 777х175
                  </p>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col items-start w-[534px]">
              <p className="pl-[13px] text-[#333333] leading-[50px]">
                Ссылка на объявление
              </p>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="bg-[#F6F6F6] w-full h-[50px] focus:outline-none rounded-[19px] pl-[8px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)]"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-[355px] h-[50px] rounded-[25px] text-white shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] ${
                isFormValid
                  ? "bg-[#27AE60] cursor-pointer"
                  : "bg-[#C0E4CF] cursor-not-allowed"
              }`}
            >
              Отправить
            </button>
          </>
        )}

        {submitted && (
          <>
            <p className="text-black w-[520px]">
              Вариант вашего баннера отправлен на рассмотрение модераторам. Ожидайте уведомления в личном кабинете.
            </p>
            <button
              onClick={handleFinish}
              className="bg-[#27AE60] w-[355px] h-[50px] rounded-[25px] text-white shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] cursor-pointer"
            >
              Завершить
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PlaceBanner;
