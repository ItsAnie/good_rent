import React, {useState} from "react";
import './SignUp.css'

function SignUp(){
    const [forget, setForget] = useState(false);
    const [showForgot, setShowForgot] = useState(false);

    return (
        <div className="sign-up flex">
            <div className="flex items-start">
                <img src="/images/app_store.png" className="download" />
            </div>
             {!forget ? (
                <form>
                    <div className="txt_field">
                        <input type="email" name="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type="password" name="password" required />
                        <span></span>
                        <label>Password</label>
                        <span className="forgot" onClick={() => setForget(true)}>forgot password?</span>
                    </div>
                    <div className="flex items-center">
                        <button type="submit" className="register-btn cursor-pointer">Зарегистрироваться</button>
                    </div>
                </form>
                ) : (
                    <form>
                        <div className="txt_field">
                            <input type="email" name="email" required />
                            <span></span>
                            <label>Email</label>
                        </div>
                        <button type="submit">Send Reset Link</button>
                    </form>
                )}
            
            <div className="flex items-start">
                <img src="/images/google-play.png" className="download" />
            </div>
        </div>    
    );
}

export default SignUp;

