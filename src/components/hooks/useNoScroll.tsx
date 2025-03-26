"use client";
import { useEffect } from "react";

const useNoScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
};

export default useNoScroll;
