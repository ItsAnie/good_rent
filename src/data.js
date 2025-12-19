import { ref, set, push } from "firebase/database";
import { database } from "./firebase";

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

const realEstateFilters = {
  mainFilters: ["Жилая", "Коммерческая"],
  residential: ["Квартира", "Дом", "Комната", "Часть дома", "Апартаменты", "Таунхаус"],
  commercial: ["Офис", "Торговая площадь", "Склад", "Гараж", "Производство", "Помещение свободного назначения"],
  repair: ["Без ремонта", "Косметический", "Евроремонт", "Дизайнеркий"],
  bathroom: ["Совмещенный", "Раздельный", "2 и более"],
  houseType: ["Кирпичный", "Деревянный", "Панельный", "Блочный", "Монолитный", "Кирпично-монолитный"]
};

const transport = {
  typeTransport:[ "Автомобиль легковой", "Автомобиль грузовой", "Мотоцикл/мототехника", "Спецтехника", "Воздушный транспорт", "Водный транспорт"],
  
}

export function addOptionsToDB() {
  const typeRef = ref(database, "type"); 
  const categoryRef = ref(database, "category");
  const serviceRef = ref(database, "service");
  const realEstateRef = ref(database, "realEstate");

  set(typeRef, type)
    .then(() => console.log("Type added successfully!"))
    .catch((error) => console.error("Error adding type:", error));

  set(categoryRef, category)
    .then(() => console.log("Category added successfully!"))
    .catch((error) => console.error("Error adding category:", error));

  set(serviceRef, service)
    .then(() => console.log("Options added successfully!"))
    .catch((error) => console.error("Error adding options:", error));

    set(realEstateRef, realEstateFilters)
      .then(() => console.log("Real estate added successfully!"))
      .catch((error) => console.error("Error adding real estate:", error));  
}
