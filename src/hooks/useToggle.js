import React, {useState} from "react";

export function useToggle(initialValue = true) {
    const [isOpen, setIsOpen] = useState(initialValue);
    const toggle = () => setIsOpen(!isOpen);
    return [isOpen, toggle];
}