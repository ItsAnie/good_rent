import { ref, set } from "firebase/database";
import { database } from "./firebase";

const recomendation = [
    // row 1 items
    [
      { id: 1, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб./мес", type: "Аренда", category: "Хобби и развлечения", address: "ул. Тургенева 150" },
      { id: 2, image: "./images/Bitmap.png", title: "Ремонт X-BOX 360", price: "10 000 руб.", type: "Услуга", category: "Хобби и развлечения", address: "ул. Тургенева 150" },
      { id: 3, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "", type: "Продажа", category: "Хобби и развлечения", address: "ул. Тургенева 150" },
    ],
    // row 2 items
    [
      { id: 4, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб./мес", type: "Аренда", category: "Хобби и развлечения", address: "ул. Тургенева 150" },
      { id: 5, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "Приставка PSP/Смартф...", type: "Продажа", category: "Хобби и развлечения", address: "ул. Тургенева 150" },
      { id: 6, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "2 000 руб./день", type: "Услуга", category: "Хобби и развлечения", address: "Краснодар, ул Красная 121" },
    ],
    // row 3 items
    [
      { id: 7, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб./мес", type: "Продажа", category: "Хобби и развлечения", address: "ул. Тургенева 150" },
      { id: 8, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб.", type: "Услуга", category: "Хобби и развлечения", address: "Краснодар, ул Красная 121" },
      { id: 9, image: "./images/Bitmap.png", title: "Приставка X-BOX 360", price: "10 000 руб.", type: "Аренда", category: "Хобби и развлечения", address: "ул. Тургенева 150" }
    ],
  ];

const type = [
  { value: "Аренда", label: "Аренда", icon: "/images/Vector5.png" },
  { value: "Услуга", label: "Услуга", icon: "/images/case.png" },
  { value: "Обмен", label: "Обмен", icon: "/images/Vector4.png" },
  { value: "Продажа", label: "Продажа", icon: "/images/money.png" },
  { value: "Даром", label: "Даром", icon: "/images/Vector2.png" },
  { value: "Ищут", label: "Ищут", icon: "/images/search_icon.png" },
];

const category = [
  { value: "Личные вещи", label: "Личные вещи", icon: "/images/clothes.png" },
  { value: "Недвижимость", label: "Недвижимость", icon: "/images/buildings.png" },
  { value: "Транспорт", label: "Транспорт", icon: "/images/car.png" },
  { value: "Хобби", label: "Хобби и развлечения", icon: "/images/games.png" },
  { value: "Для дома", label: "Для дома", icon: "/images/house.png" },
  { value: "Гаджеты", label: "Гаджеты и техника", icon: "/images/phone.png" },
  { value: "Питомцы", label: "Питомцы", icon: "/images/pets.png" },
];

const service = [
  { value: "Бытовые услуги", label: "Бытовые услуги", icon: "/images/needle.png" },
  { value: "Юридические услуги", label: "Юридические услуги", icon: "/images/case2.png" },
  { value: "Красота и здоровье", label: "Красота и здоровье", icon: "/images/beauty.png" },
  { value: "IT-услуги", label: "IT-услуги", icon: "/images/computer.png" },
  { value: "Фото- и видеосъемка", label: "Фото- и видеосъемка", icon: "/images/photo.png" },
  { value: "Ремонт и строительство", label: "Ремонт и строительство", icon: "/images/hummer.png" },
  { value: "Другое", label: "Другое", icon: "/images/other.png" },
];

export function addOptionsToDB() {
  const recoimendationRef = ref(database, "recomendation");
  const typeRef = ref(database, "type"); 
  const categoryRef = ref(database, "category");
  const serviceRef = ref(database, "service");
  const locationRef = ref(database, "location")

  set(recoimendationRef, recomendation)
    .then(() => console.log("Recomendation added successfully!"))
    .catch((error) => console.error("Error adding recomendation:", error));

  set(typeRef, type)
    .then(() => console.log("Type added successfully!"))
    .catch((error) => console.error("Error adding type:", error));

  set(categoryRef, category)
    .then(() => console.log("Category added successfully!"))
    .catch((error) => console.error("Error adding category:", error));

  set(serviceRef, service)
    .then(() => console.log("Options added successfully!"))
    .catch((error) => console.error("Error adding options:", error));
    
}
