import React from "react";
import './Register.css'

function Register({setShowForm}){
    return (
        <div className="register flex">
            <img src="/images/app_store.png" className="download" />
            <div className="register-actions flex flex-col">
                <button className="register-btn cursor-pointer">Зарегистрироваться через e-mail</button>
                <button className="flex items-center justify-center register-btn register-icon-btn cursor-pointer"><img src="images/fb.png" className="goog-fb" />Продолжить через Facebook</button>
                <button className="flex items-center justify-center register-btn register-icon-btn cursor-pointer"><img src="images/google.png" className="goog-fb" />Продолжить через Google</button>
                <button className="register-btn cursor-pointer"
                        onClick={() => setShowForm(true)}
                >Войти через e-mail</button>
                <button className="register-btn cursor-pointer">Продолжить без регистрации</button>
                </div>
                <img src="/images/google-play.png" className="download" />
        </div>
    );
}

export default Register