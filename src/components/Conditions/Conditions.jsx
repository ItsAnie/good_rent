import React from "react";
import "./Conditions.css";

function Conditions({ onClose }){
    return (
        <div>
            <div className="overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]">
                <div className="overlay-content mx-auto w-[870px] h-[523px] bg-white rounded-[18px] relative text-center top-[326px]">
                    <img 
                        src="/images/close.png" 
                        className="absolute right-[23px] top-[23px] cursor-pointer" 
                        onClick={onClose}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-between pt-[30px] pb-[61px]">
                        <h2 className="text-[#18A615] text-xl font-medium font-[Roboto] ">Условия использования</h2>
                        <div className="conditions-scroll overflow-y-auto max-h-[401px] mt-[24px]">
                            <p className="w-[704px] text-left">
                                Et proin cras nisl, quis habitant ultrices nibh amet. Id eget proin vestibulum etiam. Senectus ullamcorper augue vulputate elit tellus, amet. 
                                Purus et ultrices aliquam mi nunc, ipsum vehicula massa egestas. Tellus tellus, eleifend vulputate tristique nam. 
                                Nisl leo, orci enim ultrices imperdiet sed eu. Sed arcu odio vitae dictum morbi. Ipsum dolor augue sit non integer vitae id. 
                                Consequat non tincidunt ultricies lorem a pellentesque. Dui proin quis adipiscing tempor hendrerit aliquam dui nunc nullam. 
                                Facilisis dignissim urna est eu sit dolor pellentesque mauris. Ultricies suspendisse maecenas eget eget tempus. Tempus ac gravida tortor, dui id dictum. 
                                Tempor, nullam cras id sit imperdiet. Aliquam bibendum elit diam urna, sit eleifend congue. Mauris, justo, lacus, phasellus commodo sodales tristique. 
                                Neque eu lorem erat mattis nibh cursus. Morbi feugiat malesuada enim sem congue netus. Habitant lectus odio tristique vitae arcu odio ultricies malesuada. 
                                Morbi eget neque sed a a, condimentum pulvinar ut mi. Tincidunt quam netus cum sed fermentum. Eget interdum mauris sem nibh ac orci, amet. 
                                A id sed nibh id sed. Adipiscing tortor enim enim massa nulla consectetur leo. Pretium arcu, molestie a nisl facilisis ultricies etiam tellus consequat. 
                                Quis magna viverra morbi porta pellentesque. Dignissim est, donec ut morbi ullamcorper interdum faucibus rutrum. Quis et, quis sed congue nascetur massa iaculis. 
                                Elementum eu mauris in et tincidunt elit. Vestibulum posuere nam senectus in etiam proin purus egestas tempus. Lacus amet egestas vel ultrices maecenas netus. 
                                Phasellus turpis at purus gravida semper in pulvinar cum. Pulvinar elit, malesuada a dapibus erat faucibus faucibus in. 
                                Tellus vel lacus volutpat quam curabitur suspendisse. Fames cursus lacus, ut laoreet amet pulvinar odio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conditions;