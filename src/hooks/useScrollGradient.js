import { useEffect, useRef } from "react";

export function useScrollGradient(deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const isScrollable = el.scrollHeight > el.clientHeight;
      const isBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      if (!isScrollable || isBottom) {
        el.classList.add("no-gradient");
      } else {
        el.classList.remove("no-gradient");
      }
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, deps); 

  return ref;
}
