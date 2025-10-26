import React from "react";
import './Footer.css'

function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container container">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="footer-text flex flex-col sm:flex-row items-center">
                        <p>Условия использования</p>
                        <p>Оферта</p>
                        <p>Соглашение</p>
                    </div>

                    <div className="icons-list flex flex-col md:flex-row justify-between">
                        <div className="footer-icons flex flex-wrap items-center">
                            <img src="/images/instagram.png" className="icons" />
                            <img src="/images/fb.png" className="icons" />
                            <img src="/images/in.png" className="icons" />
                            <img src="/images/yelp.png" className="icons" />
                            <img src="/images/youtube.png" className="icons" />
                            <img src="/images/tg.png" className="icons" />
                            <img src="/images/whatsapp.png" className="icons" />
                        </div>

                        <div className="language-list flex flex-col items-start mt-2 md:mt-0">
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