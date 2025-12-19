import React, { useEffect } from "react";
import { fetchAllProducts } from "../../store/slice/allProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import './Favorites.css'
import { useToggle } from "../../hooks/useToggle";

function Favorites(){
    const [isOpen, toggle] = useToggle(true);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!data) return <p>Нет данных</p>;

    const flatData = Array.isArray(data) ? data.flat() : Object.values(data).flat();

    const favorites = flatData.slice(0, 8);

    return (
        <div className="max-h-[690px] overflow-hidden mt-[40px]">
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggle}>
                <h2 className="text-xl font-medium text-[#18A615] font-[Roboto]">Избранные</h2>
                <img src={isOpen ? "/images/arow.png" : "/images/arow-down.png"} className="arrow w-[11.69px] h-[5.84px]" />
            </div>
            {isOpen && (
                <div className="favorites h-[600px] mt-[15px] overflow-y-auto">
                    {favorites.map((product, index) => {
                        return (
                            <div className="flex mt-[10px] w-[739px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] rounded-[8px] py-[15px] gap-[31px]">
                                <div key={product.id || index} className="flex"> 
                                    <img 
                                        src={product.image} 
                                        className="w-[70px] h-[70px]"
                                    />
                                    <div>
                                        <div className="flex items-center">
                                            <h3 className="text-sm font-normal w-[165px]">{product.title}</h3>
                                            <p className="text-[10px] text-[#BDBDBD]">{product.type}</p>
                                        </div>
                                        <p className="text-xs font-medium">{product.price}</p>
                                        <p className="text-xs">Приставка псп в аренду в отличном состоянии. Игры в комплекте</p>
                                    </div>
                                </div>
                                <div className="flex w-[204px]">
                                    <p className="text-[10px] text-[#BDBDBD]">
                                            151 просмотр (+2 сегодня) Действительно до 28.02.2019
                                    </p>
                                    <div className="flex text-[#F9BD00] text-[8px] gap-[5px]">
                                        <img 
                                            src="/images/star.png" 
                                            alt="rating" 
                                            className="w-[11px] h-[10px]"
                                        />
                                            3
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Favorites;