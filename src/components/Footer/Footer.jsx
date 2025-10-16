import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="flex justify-between">
                    <div className="footer-text flex items-center">
                        <p>Условия использования</p>
                        <p>Оферта</p>
                        <p>Соглашение</p>
                    </div>

                    <div className="icons-list flex">
                        <div className="footer-icons flex items-center">
                            <img src="/images/instagram.png" className="icons" />
                            <img src="/images/fb.png" className="icons" />
                            <img src="/images/in.png" className="icons" />
                            <img src="/images/yelp.png" className="icons" />
                            <img src="/images/youtube.png" className="icons" />
                            <img src="/images/tg.png" className="icons" />
                            <img src="/images/whatsapp.png" className="icons" />
                        </div>

                        <div className="language-list flex flex-col items-start">
                            <p>Язык интерфейса</p>
                            <select className="language">
                                <option>Русский</option>
                                <option>Английский</option>
                                <option>Армянский</option>
                            </select>
                        </div>
                    </div>
                </div>

                <p className="footer-txt">ООО “Гудрент”. (c) Все права защищены. 2020</p>
            </div>    
        </footer>
    );
}

export default Footer;