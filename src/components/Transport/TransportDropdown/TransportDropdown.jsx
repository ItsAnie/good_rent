import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransport } from "../../../store/slice/transportSlice";
import "./TransportDropdown.css"

function TransportDropdown({ id, newAd }) {
  const dispatch = useDispatch();
  const {brand, color} = useSelector(state => state.transport)
  const options = id === "brand" ? brand : color;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    dispatch(fetchTransport());
  }, [dispatch]);
 

  return (
    <div className={`relative ${newAd ? "mt-[36px] font-normal" : "mt-[58px]"}`}>
      <h2 className={`font-medium font-[Roboto] mb-[8px] ${newAd ? "text-[#BDBDBD] ml-[31px]" : "text-[#333333]"}`}>
        {id === "brand" ? "Марка" : "Цвет"}
      </h2>
      <div
        className="bg-[#F6F6F6] rounded-[19px] shadow-[0_2px_10px_0_rgba(0,0,0,0.07)] flex items-center w-[340px] h-[50px] relative z-30 cursor-pointer pl-[15px] pr-[22px]"
        onClick={() => setOpen(prev => !prev)}
      >
        <span className="text-sm">
          {selected || (id === "brand" ? "" : "")}
        </span>
        <img src="/images/arrow.png" className="ml-auto w-[12px]" />
      </div>

      {open && (
        <div className="absolute top-[36px] w-[340px] left-0 pr-[7px] pt-[5px] bg-[#F6F6F6] rounded-[19px]">
          <ul className="transport-scroll w-full max-h-[262px] z-20 flex flex-col gap-[12px] 
                       rounded-[19px] list-none overflow-y-auto pt-[62px] pl-[15px] pb-[8px] "
          >
            {options.map((opt) => (
              <li
                  key={opt}
                  className="cursor-pointer flex items-center text-[#333333] text-sm"
                  onClick={() => {
                    setSelected(opt);  
                    setOpen(false);
                  }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TransportDropdown;

