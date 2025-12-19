import React from "react";
import ImageUploadSlider from "./ImageUploadSlider/ImageUploadSlider";
import Dropdown from "../Dropdown";
import Rent from "./Rent/Rent";
import { useToggle } from "../../hooks/useToggle";
import RealEstate from "../RealEstate/RealEstate";
import Square from "../RealEstate/Square";
import Rooms from "../RealEstate/Rooms";
import AddressField from "../AddressField";
import YearConstruction from "../RealEstate/YearConstruction";
import Floor from "../RealEstate/Floor";
import PropertyType from "../RealEstate/PropertyType/PropertyType";

function NewadForm({formData, setFormData, selectedType, selectedCategory, isEditMode, handleSubmit, handleSaveChanges, handleCancel, isFormValid, imageFiles, setImageFiles}){

    return (
        <div className="container mx-auto pt-[65px] pb-[206px]">
            <h2 className="text-2xl text-[#18A615] text-center font-medium font-[Roboto] mb-[36px]">Подать объявление</h2>
                <ImageUploadSlider onImagesChange={setImageFiles} imageFiles={imageFiles} />
                <div className="flex flex-col text-[#BDBDBD] font-medium font-[Roboto] pt-[97px]">
                <div className="flex justify-between">
                    <div className="w-[489px]">                   
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="ml-[22px]">Название</label>
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
                                <label htmlFor="description" className="ml-[22px] mt-[39px]">Описание</label>
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
                            <p className="pl-[20px] text-base">Тип объявления</p>
                            <div className="relative w-[340px] font-normal text-[#333333] text-sm">
                                <Dropdown
                                    id="type"
                                    onlyLabels={true}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-[39px] text-sm relative z-10">
                            <p className="pl-[20px] text-base">Категория</p>
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
                                <Rooms newAd />
                            </div>
                        )}
                </div>
                <div className={`${selectedType?.value || selectedCategory?.value ? "block" : "invisible"} min-w-[478px] max-w-full`}>
                    {selectedType?.value === "Аренда" && 
                        <Rent formData={formData} setFormData={setFormData} />
                    }
                    {selectedType?.value === "Продажа" && (
                    <div className="flex flex-col absolute">
                        <label htmlFor="price" className="ml-[18px]">Стоимость (руб.)</label>
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
                        <label htmlFor="exchange" className="ml-[18px]">Цель обмена</label>
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

                    {selectedCategory?.value === "Недвижимость" && (
                        <div className="flex items-end justify-between w-full">                        
                            <RealEstate newAd />
                            <div className="flex flex-col items-center justify-center ml-[60px]">
                                <Floor newAd />
                                <YearConstruction newAd />
                            </div>
                        </div>
                    )}
                </div>
                </div>
                <div className="flex justify-between items-center">
                    <AddressField newAd />
                    {selectedCategory?.value === "Недвижимость" && (
                        <div className="mt-[59px]">
                            <PropertyType newAd />
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

