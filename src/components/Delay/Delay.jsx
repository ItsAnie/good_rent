// Delay.jsx
import React, { useState, useEffect } from "react";
import './Delay.css';

function Delay({ onFinish }) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      onFinish();
    }, 2000); // 2 վայրկյան լոգոն երևում է

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <>
      {showLogo && (
        <div className="delay-logo flex flex-col items-center justify-center">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <h1>GoodRent.</h1>
          <p>Сервис поиска услуг и товаров для аренды рядом с Вами!</p>
        </div>
      )}
    </>
  );
}

export default Delay;
