import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../../store/slice/allProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import './MyAnnouncement.css'
import { useToggle } from "../../hooks/useToggle";

function MyAnnouncement(){
    const [isOpen, toggle] = useToggle(true);
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state) => state.allProducts);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    useEffect(() => {
        if (data) {
            const flat = Array.isArray(data) ? data.flat() : Object.values(data).flat();
            setProducts(flat);
        }
    }, [data]);
    
    const handleDelete = (id) => {
        setProducts(prev => prev.filter(product => product.id !== id));
    };


    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (!data) return <p>Нет данных</p>;

    const flatData = Array.isArray(data) ? data.flat() : Object.values(data).flat();

    const active = products.slice(0, 2);
    const archive = products.slice(0, 8);
    



    return (
        <div className="mt-[40px] overflow-hidden max-h-[690px]">
            <div className="flex items-center gap-2 cursor-pointer" onClick={toggle}>
                <h2 className="text-xl font-medium text-[#18A615] font-[Roboto]">Мои объявления</h2>
                <img src={isOpen ? "/images/arow.png" : "/images/arow-down.png"} className="arrow w-[11.69px] h-[5.84px]" />
            </div>
            {isOpen && (
                <div className="announcement h-[600px] overflow-y-auto">
                    <div>
                        <h3 className="mt-[18px]">Активные (2)</h3>
                        <div className="flex justify-center gap-[10px]">
                            <button className="bg-white border-none w-[56px] h-[38px] 
                                            text-center text-sm rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] 
                                            active:bg-[#18A615] active:text-[#FFFFFF] cursor-pointer"
                            >
                                                Все
                            </button>
                            <button className="bg-white border-none w-[93px] h-[38px] 
                                            text-center text-sm rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] 
                                            active:bg-[#18A615] active:text-[#FFFFFF] cursor-pointer"
                            >
                                                В аренде
                            </button>
                            <button className="bg-white border-none w-[97px] h-[38px] 
                                            text-center text-sm rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] 
                                            active:bg-[#18A615] active:text-[#FFFFFF] cursor-pointer"
                            >
                                                На руках
                            </button>
                            <button className="bg-white border-none w-[90px] h-[38px] 
                                            text-center text-sm rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] 
                                            active:bg-[#18A615] active:text-[#FFFFFF] cursor-pointer"
                            >
                                                Ожидаю
                            </button>
                        </div>

                        <div className="active mt-[15px]">
                            {active.map((product, index) => {
                                return (
                                    <div key={product.id || index} className="flex mt-[10px] w-[739px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] rounded-[8px] py-[15px] gap-[31px]">
                                        <div className="flex"> 
                                            <img 
                                                src={product.images?.[1]} 
                                                className="w-[70px] h-[70px]"
                                            />
                                            <div>
                                                <div className="flex items-center">
                                                    <h3 className="text-sm font-normal w-[165px]">{product.name}</h3>
                                                    <p className="text-[10px] text-[#BDBDBD]">{product.type}</p>
                                                </div>
                                                <p className="text-xs font-medium">{product.price}</p>
                                                <p className="text-xs">Приставка псп в аренду в отличном состоянии. Игры в комплекте</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between w-[204px]">
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
                                            <div className="flex justify-end gap-[18px]">
                                                <img 
                                                    src="/images/delete.png" 
                                                    alt="delete" 
                                                    className="cursor-pointer"
                                                    onClick={() => handleDelete(product.id)} />
                                                <img src="/images/edit.png" alt="edit" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="mt-[18px]">Архив (8)</h3>
                        <div className="active mt-[15px]">
                            {archive.map((product, index) => {
                                return (
                                    <div className="flex mt-[10px] w-[739px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] rounded-[8px] py-[15px] gap-[31px]">
                                        <div key={product.id || index} className="flex"> 
                                            <img 
                                                src={product.images?.[1]} 
                                                className="w-[70px] h-[70px]"
                                            />
                                            <div>
                                                <div className="flex items-center">
                                                    <h3 className="text-sm font-normal w-[165px]">{product.name}</h3>
                                                    <p className="text-[10px] text-[#BDBDBD]">{product.type}</p>
                                                </div>
                                                <p className="text-xs font-medium">{product.price}</p>
                                                <p className="text-xs">Приставка псп в аренду в отличном состоянии. Игры в комплекте</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between w-[204px]">
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
                                            <div className="flex justify-end gap-[18px]">
                                                <img src="/images/restore.png" alt="restore" />
                                                <img 
                                                    src="/images/delete.png" 
                                                    alt="delete"
                                                    className="cursor-pointer"
                                                    onClick={() => handleDelete(product.id)} />
                                                <img src="/images/edit.png" alt="edit" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyAnnouncement;