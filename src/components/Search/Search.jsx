import React, { useState } from "react";

function Search({ label, options, onChange }) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Ֆիլտրում ենք ըստ գրած տեքստի
  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleSelect = (value) => {
    setInputValue(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(true);
    onChange(value); // նաև փոխանցում ենք value-ն վերև
  };

  return (
    <div style={{ marginBottom: "15px", position: "relative" }}>
      <p>{label}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        placeholder={`Введите ${label.toLowerCase()}...`}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      {isOpen && filteredOptions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {filteredOptions.map((option, i) => (
            <li
              key={i}
              onClick={() => handleSelect(option)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#f2f2f2")}
              onMouseLeave={(e) => (e.target.style.background = "white")}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;