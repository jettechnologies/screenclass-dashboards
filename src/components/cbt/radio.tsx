import React from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  index: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const alphabets = ["A", "B", "C", "D", "E", "F", "G"];

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  label,
  checked,
  index,
  onChange,
}) => {
  return (
    <div className="flex w-full cursor-pointer items-center border-y border-gray-200 py-3">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-blue-600"
      />
      <label
        htmlFor={name}
        className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
      >
        <span className="mr-2 text-base font-bold uppercase">{`(${alphabets[index]})`}</span>
        {label}
      </label>
    </div>
  );
};
