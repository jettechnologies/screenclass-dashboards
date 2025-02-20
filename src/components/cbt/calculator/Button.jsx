import React from "react";

export function Button({ handleClick, name, value, className, calc }) {
  return (
    <button
      className={`min-w-[4.5rem] rounded-md bg-SC-Blue px-6 py-3 font-bold text-white shadow-md hover:bg-blue-600 md:min-w-24 ${
        className || ""
      }`}
      onClick={handleClick}
      name={name}
    >
      {value}
    </button>
  );
}
