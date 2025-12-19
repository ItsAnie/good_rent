import React, {useState, useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../store/slice/profileSlice";
import { getAuth, updateProfile } from "firebase/auth";
import PrivateData from "./PrivateData";
import SocialData from "./SocialData";
import { useToggle } from "../../hooks/useToggle";

function EditProfile(){
    const dispatch = useDispatch();
    const {data: profile, loading} = useSelector((state) => state.profile);
    const auth = getAuth();
    const user = auth.currentUser;

    const [isMapOpen, toggleMap] = useToggle(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        facebook: "",
        telegram: "",
        whatsapp: "",
        image: ""
    });

    const fileInputRef = useRef(null);

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || "",
                email: profile.email || "",
                phone: profile.phone || "",
                instagram: profile.socialLinks?.instagram || "",
                facebook: profile.socialLinks?.facebook || "",
                telegram: profile.socialLinks?.telegram || "",
                whatsapp: profile.socialLinks?.whatsapp || "",
                image: profile.image || "",
            });
        }
    }, [profile]);

    const handleSave = () => {
        if (user?.uid) {
            const profileData = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                image: formData.image,
                location: formData.location,
                socialLinks: {
                    instagram: formData.instagram,
                    facebook: formData.facebook,
                    telegram: formData.telegram,
                    whatsapp: formData.whatsapp
                }
            };
            dispatch(updateUserProfile({uid: user.uid, profileData}));
        }
    };

    const handleCancel = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            location: "",
            instagram: "",
            facebook: "",
            telegram: "",
            whatsapp: ""
        });
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="mt-[80px] mb-[171px] flex flex-col justify-center">
            <div className="flex justify-center gap-[50px]">
                <div>
                    <img
                        src={formData.image || "/images/userpic.png"}
                        alt="user"
                        className={`w-[100px] h-[100px] object-cover cursor-pointer ${
                            formData.image ? "rounded-full" : ""
                        }`}
                        onClick={handleImageClick}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="flex flex-col gap-[24px]">
                    <PrivateData formData={formData} setFormData={setFormData} toggleMap={toggleMap} />
                    <SocialData formData={formData} setFormData={setFormData} />
                    {isMapOpen && (
                        <div className="mt-[48px] mb-[29px]">
                            <img src="/images/Map.png" alt="Map" className="w-[600px] h-[400px]" />
                        </div>
                    )}
                </div>
            </div>           

            <div className="flex justify-center gap-[25px] mt-[41px]">
                <button className="border border-[#219653] rounded-[25px] w-[263px] h-[50px] text-[#219653] text-center text-sm font-normal cursor-pointer"
                    onClick={handleCancel}
                >
                    Отмена
                </button>
                <button className="bg-[#27AE60] rounded-[25px] w-[263px] h-[50px] text-white text-center text-sm font-normal cursor-pointer"
                     onClick={handleSave}
                >
                     Сохранить изменения
                 </button>
            </div>
        </div>
    );
}

export default EditProfile;