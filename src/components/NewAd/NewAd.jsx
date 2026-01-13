import React, {useState, useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { setSelectedType, setSelectedCategory } from "../../store/slice/dropdownSlice";
import { getDatabase, ref, push, update } from "firebase/database";
import { database } from "../../firebase";
import NewadForm from "./NewAdForm";

function NewAd(){
    const dispatch = useDispatch();
    const selectedType = useSelector(state => state.dropdown.selectedType);
    const selectedCategory = useSelector(state => state.dropdown.selectedCategory);
    const profile = useSelector(state => state.profile.data);

    const [productId, setProductId] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [originalData, setOriginalData] = useState(null);

    const [imageFiles, setImageFiles] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        exchange: "",
        deposit: "",
        address: "",
        rentMin: "",
        rentMax: "",
        rentDay: "", 
        userId: profile.uid
    });

    const checkFormValid = () => {
        if (!formData.name.trim() || !formData.description.trim()) return false;
        if (!formData.address.trim()) return false;
        if (!selectedType?.value || !selectedCategory?.label) return false;

        if (selectedType?.value === "Продажа" && !formData.price.trim()) return false;
        if (selectedType?.value === "Аренда") {
            if (!formData.rentMin.trim() || !formData.rentMax.trim() || !formData.rentDay.trim()) return false;
            if (!formData.deposit.trim()) return false;
        }
        if (selectedType?.value === "Обмен" && !formData.exchange.trim()) return false;

        if (imageFiles.length === 0) return false;

        return true;
    };

    const isFormValid = checkFormValid();

    useEffect(() => {
          dispatch(setSelectedType(null));
          dispatch(setSelectedCategory(null));
    }, [dispatch]);

    useEffect(() => {
        if(profile?.location && !formData.address){
            setFormData(prev => ({ ...prev, address: profile.location }));
        }
    }, [profile]);

    const uploadImageToCloudinary = async (file) => {
        const formDataCloud = new FormData();
        formDataCloud.append("file", file);
        formDataCloud.append("upload_preset", "nlxgr5rs");
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/dkoj8spfv/image/upload`,
            { method: "POST", body: formDataCloud }
        );
        const data = await res.json();
        return data.secure_url;
    };

    const handleSubmit = async () => {
        try {
            if (!profile?.uid) {
                alert("Профиль пользователя ещё не загружен.");
                return;
            }

            const uploadedUrls = [];
            for (const file of imageFiles) {
                const url = await uploadImageToCloudinary(file);
                uploadedUrls.push(url);
            }

            const newProduct = {
                name: formData.name,
                description: formData.description,
                price: formData.price,
                category: selectedCategory?.label || "",
                type: selectedType?.value || "",
                images: uploadedUrls,
                address: formData.address,
                rentMin: formData.rentMin,
                rentMax: formData.rentMax,
                rentDay: formData.rentDay,
                deposit: formData.deposit,
                exchange: formData.exchange,
                userId: profile.uid, 
                createdAt: Date.now()
            };

            const newRef = await push(ref(database, "allProducts"), newProduct);

            setProductId(newRef.key);           
            setOriginalData(newProduct);        
            setIsEditMode(true);                

        } catch (error) {
            console.error(error); 
            alert("Произошла ошибка при отправке объявления!");
        }
    };

    const handleSaveChanges = async () => {
        try {
            await update(ref(database, `allProducts/${productId}`), formData);
            setFormData({
            name: "",
            description: "",
            price: "",
            exchange: "",
            deposit: "",
            address: profile.location || "",
            rentMin: "",
            rentMax: "",
            rentDay: ""
        });
        setImageFiles([]);

        setIsEditMode(false);
        setProductId(null);
        setOriginalData(null);
        dispatch(setSelectedCategory(null));
        dispatch(setSelectedType(null));
        } catch (error) {
            console.error(error);
            alert("Ошибка при сохранении изменений");
        }
    };

    const handleCancel = () => {
        setFormData(originalData);  
    };



    return (
        <div>
            <NewadForm
                formData={formData}
                setFormData={setFormData}
                selectedType={selectedType}
                selectedCategory={selectedCategory}
                isEditMode={isEditMode}
                handleSubmit={handleSubmit}
                handleSaveChanges={handleSaveChanges}
                handleCancel={handleCancel}
                isFormValid={isFormValid}
                imageFiles={imageFiles}
                setImageFiles={setImageFiles}
            />
        </div>
    );
}

export default NewAd;

                