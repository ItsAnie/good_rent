import React from "react";

function AboutUs(){
    return(
        <div className="mt-[31px] mb-[35px]">
            <div className="flex items-center justify-center flex-col text-[#4f4f4f]">
                <img src="/images/logo.png" alt="logo" className="w-[335px]" />
                <h1 className="text-[64px] font-medium font-[Roboto]">GoodRent.</h1>
                <p className="text-lg text-center font-[Roboto] max-w-[267px]">
                    Сервис поиска услуг и товаров для аренды рядом с Вами!
                </p>
            </div>

            <div className="space-y-[30px] mt-[45px] max-w-[1327px] mx-auto text-2xl text-[#333333] font-[Roboto]">
                <p>
                    У каждого из нас есть множество вещей которые нам больше не нужны. <br />
                    К сожалению, эти вещи остаются ношей которую не хочется выбрасывать.
                </p>

                <p>
                    Good Rent — это платформа которая даёт таким вещам второй шанс. <br />
                    Любой человек может разместить объявление о раздаче или продаже чего-нибудь в любой точке мире.
                </p>

                <p>
                    Возможно, вам нужно какое-то оборудование и вы не можете его купить? <br />
                    Тогда следует арендовать его у кого-то поблизости через Good Rent!
                </p>

                <p>
                    Наша миссия — помочь людям со всего мира размещать объявления, арендовать вещи, а также обмениваться <br />
                    различными услугами.
                </p>

                <p>
                    Мы предоставляем качественную платформу для всех видов объявлений. <br />
                    Размещайте вещи, одалживайте чужие, помогайте друг другу и участвуйте в благотворительных акциях - все это о Good Rent.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;