import React from "react";
import { useSelector } from "react-redux";
import ImageUploadSlider from "./ImageUploadSlider/ImageUploadSlider";
import Dropdown from "../../Dropdown";
import Rent from "./Rent/Rent";
import RealEstate from "../RealEstate/RealEstate";
import Square from "../RealEstate/Square";
import Rooms from "../RealEstate/Rooms";
import AddressField from "../AddressField";
import YearConstruction from "../RealEstate/YearConstruction";
import Floor from "../RealEstate/Floor";
import PropertyType from "../RealEstate/PropertyType/PropertyType";
import TransportDropdown from "../Transport/TransportDropdown/TransportDropdown";
import Transport from "../Transport/Transport";

function NewadForm({formData, setFormData, selectedType, selectedCategory, isEditMode, handleSubmit, handleSaveChanges, handleCancel, isFormValid, imageFiles, setImageFiles}){
    const { selectedPropertyType } = useSelector(state => state.realEstate);
    const {selectedMainFilter} = useSelector(state => state.realEstate);

    return (
        <div className="container mx-auto pt-[65px] pb-[206px] min-h-screen">
            <h2 className="text-2xl text-[#18A615] text-center font-medium font-[Roboto] mb-[36px]">Подать объявление</h2>
                <ImageUploadSlider onImagesChange={setImageFiles} imageFiles={imageFiles} />
                <div className="flex flex-col font-medium font-[Roboto] pt-[97px]">
                <div className="flex justify-between">
                    <div className="w-[489px]">                   
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="ml-[22px] text-[#BDBDBD]">Название</label>
                                <input 
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    placeholder="Название товара" 
                                    className="text-sm text-black placeholder-[#BDBDBD] font-normal bg-[#F6F6F6] h-[50px] rounded-[19px] 
                                               focus:outline-none pl-[20.26px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
                                />
                            </div>
                        
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="ml-[22px] mt-[39px] text-[#BDBDBD]">Описание</label>
                                <textarea 
                                    id="description"
                                    placeholder="Описание товара" 
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    className="text-sm text-black placeholder-[#BDBDBD] font-normal bg-[#F6F6F6] h-[167px] rounded-[19px] 
                                               focus:outline-none pl-[20.26px] pt-[17px] resize-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
                                /> 
                            </div> 
                    </div>
                    
                    {/* dropdown */}
                    <div className="relative">
                        <div className="flex flex-col gap-2 text-sm relative z-20">
                            <p className="pl-[20px] text-base text-[#BDBDBD]">Тип объявления</p>
                            <div className="relative w-[340px] font-normal text-[#333333] text-sm">
                                <Dropdown
                                    id="type"
                                    onlyLabels={true}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-[39px] text-sm relative z-10">
                            <p className="pl-[20px] text-base text-[#BDBDBD]">Категория</p>
                            <div className="relative w-[340px] font-normal text-[#333333] text-sm">
                                <Dropdown
                                    id="category"
                                    onlyLabels={true}
                                />
                            </div>
                        </div>

                        {selectedCategory?.value === "Недвижимость" && (
                            <div className="flex justify-between w-full absolute gap-45">
                                <Square newAd />
                            </div>
                        )}
                </div>
                <div className={`${selectedType?.value || selectedCategory?.value ? "block" : "invisible"} min-w-[478px] max-w-full relative`}>
                    {selectedType?.value === "Аренда" && 
                        <Rent formData={formData} setFormData={setFormData} />
                    }
                    {selectedType?.value === "Продажа" && (
                    <div className="flex flex-col absolute z-50">
                        <label htmlFor="price" className="ml-[18px] text-[#BDBDBD]">Стоимость (руб.)</label>
                        <input 
                            type="text" 
                            id="price" 
                            value={formData.price}
                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                            placeholder="Стоимость" 
                            className="w-[286px] h-[50px] bg-[#F6F6F6] text-black placeholder-[#BDBDBD] rounded-[19px] text-sm font-normal 
                                       pl-[19.8px] mt-[8px] focus:outline-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
                        />
                    </div>
                    )}

                    {selectedType?.value === "Ищут" &&
                    <div className="flex flex-col gap-2 w-[340px] font-normal text-[#333333] text-sm">
                        <p className="invisible">Ищут</p>
                         <Dropdown id="sub" onlyLabels={true} />                 
                    </div>
                    }

                    {selectedType?.value === "Обмен" && (
                    <div className="flex flex-col gap-[8px]">
                        <label htmlFor="exchange" className="ml-[18px] text-[#BDBDBD]">Цель обмена</label>
                        <textarea 
                            id="exchange" 
                            value={formData.exchange}
                            onChange={(e) => setFormData({...formData, exchange: e.target.value})}
                            placeholder="Перечислите товары/услуги, на которые хотели бы поменяться" 
                            className="w-[286px] h-[167px] bg-[#F6F6F6] text-black placeholder-[#BDBDBD] rounded-[19px] text-sm font-normal 
                                       pl-[19.8px] pt-[17px] focus:outline-none resize-none shadow-[0px_2px_10px_0px_rgba(0,0,0,0.07)]"
                        />
                    </div>
                    )}

                    {selectedCategory?.value === "Недвижимость" ? (
                        <div className="flex flex-col absolute">
                            <div className="flex items-end w-full">   
                                <div className="mb-[15px]">
                                    <RealEstate newAd />
                                </div>                     
                                <div className="flex flex-col items-center gap-[39px] justify-center ml-[60px]">
                                    <Floor newAd />
                                    <YearConstruction newAd selectedCategory={selectedCategory} />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                    <div className="-ml-[100px]">
                                        {selectedMainFilter !== "Коммерческая" && <Rooms newAd />}
                                    </div>
                                    <div className="mt-[59px]">
                                        <PropertyType newAd selectedCategory={selectedCategory} selectedValue={selectedPropertyType} />
                                    </div>
                            </div>
                        </div>
                    ) : (selectedCategory?.value === "Транспорт" && 
                        <div className="flex flex-col items-end absolute top-0 bottom-0 left-0 right-0">
                            <YearConstruction newAd selectedCategory={selectedCategory} />
                            <div className="flex flex-col items-start mt-[43px]">
                                <PropertyType newAd selectedCategory={selectedCategory} selectedValue={selectedPropertyType} />
                                {selectedPropertyType === "Автомобиль легковой" && (
                                    <div>
                                        <Transport id="transmission" newAd />
                                        <Transport id="drive" newAd />
                                        <Transport id="steeringWheel" newAd />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                </div>
                <div className={`${selectedCategory?.value === "Недвижимость" ? "flex" : "flex flex-col"} justify-between`}>
                    <AddressField newAd />
                     {(selectedCategory?.value === "Транспорт" && selectedPropertyType === "Автомобиль легковой") && (
                        <div className="flex justify-between w-[780px] items-center">
                            <TransportDropdown id="brand" newAd />
                            <TransportDropdown id="color" newAd />
                        </div>
                    )}
                </div>
                {isEditMode ? (
                    <div className="flex gap-[25px] mt-[65px] mx-auto">
                        <button onClick={handleCancel} className="border border-[#219653] text-[#219653] font-normal w-[263px] h-[50px] rounded-[25px] cursor-pointer">
                            Отмена
                        </button>

                        <button onClick={handleSaveChanges} className="bg-[#219653] text-white font-normal w-[263px] h-[50px] rounded-[25px] cursor-pointer">
                            Сохранить изменения
                        </button>
                    </div>
                ) : (
                    <button 
                        onClick={handleSubmit}
                        disabled={!isFormValid} 
                        className={`w-[263px] h-[50px] rounded-[25px] mx-auto mt-[65px] text-white font-normal  ${
                            isFormValid ? "bg-[#27AE60] cursor-pointer" : "bg-[#C0E4CF] cursor-not-allowed"
                        }`}
                    >
                        Опубликовать
                    </button>
                )}

            </div>
        </div>
    );
}

export default NewadForm;

