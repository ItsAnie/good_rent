import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOptions } from "../store/slice/optionsSlice";
import { setSelectedType, setSelectedCategory, setSelectedSub } from "../store/slice/dropdownSlice";

function Dropdown({ id, iconKey = "icon", onlyLabels = false }) {
  const dispatch = useDispatch();
  const { type, category, service, loading } = useSelector(state => state.options);
  const options = id === "type" ? type : id === "category" ? category : service;
  const { selectedType, selectedCategory, selectedSub } = useSelector(state => state.dropdown);
  const [open, setOpen] = useState(false);

  // Fetch options once
  useEffect(() => {
    if (!loading) dispatch(fetchOptions());
  }, [loading, dispatch]);


  // Dropdown mapping
  const map = {
    type: {
      selected: selectedType,
      selectAction: (opt) => {
        dispatch(setSelectedType(opt));
      },
      list: options,
    },
    category: {
      selected: selectedCategory,
      selectAction: (opt) => dispatch(setSelectedCategory(opt)),
      list: selectedType?.value === "Услуга" ? service : category,
    },
    sub: {
      selected: selectedSub,
      selectAction: (opt) => dispatch(setSelectedSub(opt)),
      list:
        selectedType?.value === "Ищут"
          ? type.filter(t => t.value !== "Ищут")
          : [],
    },
  };

  const dropdown = map[id];
  if (!dropdown) return null;

  const displayOptions = onlyLabels
    ? dropdown.list.map(opt => ({ label: opt.label, value: opt.value }))
    : dropdown.list;

  return (
    <div className="relative w-full">
      {/* Main Select */}
      <div
        className="bg-[#F6F6F6] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] flex items-center h-[50px] relative z-30 cursor-pointer pl-[15px] pr-[22px]"
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="flex items-center gap-[10px]">
          {dropdown.selected?.[iconKey] && (
            <img src={dropdown.selected[iconKey]} className="h-[20px]" />
          )}
          {dropdown.selected?.label}
        </span>
        <img src="/images/arrow.png" className="ml-auto w-[12px]" />
      </div>

      {/* Options List */}
      {open && (
        <ul className="absolute top-0 left-0 w-full z-20 flex flex-col gap-[9px] 
                       rounded-[19px] list-none overflow-y-hidden pt-[55px] pl-[15px] pb-[8px] bg-[#F6F6F6]"
        >
          {displayOptions.map((opt) => (
            <li
              key={opt.value}
              className="cursor-pointer flex items-center gap-[12px]"
              onClick={() => {
                dropdown.selectAction(opt);
                setOpen(false);
              }}
            >
              {!onlyLabels && opt[iconKey] && <img src={opt[iconKey]} className="h-[20px]" />}
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

