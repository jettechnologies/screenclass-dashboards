"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { DisplayContainer, ButtonsContainer } from "../cbt/calculator";

interface CalculatorModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = e.currentTarget.name;
    setDisplay(display + targetValue);
  };

  const operatorClick = (operator: string) => {
    const lastCharacter = display.slice(-2);
    const operatorsArray = ["+ ", "- ", "* ", "/ "];

    if (display === "" || operatorsArray.includes(lastCharacter)) return;

    setDisplay((prevDisplay) => prevDisplay + " " + operator + " ");
  };

  function handleEqual() {
    const lastCharacters = display.slice(-2);
    const operatorsArray = ["+ ", "- ", "* ", "/ "];

    if (operatorsArray.includes(lastCharacters)) return;

    setDisplay("");

    try {
      const resultValue = calculate(display);
      setResult(resultValue.toString());
    } catch (error) {
      if (error instanceof Error) {
        setDisplay(`Error: ${error.message}`);
      } else {
        setDisplay("An unexpected error occurred.");
      }
    }
  }

  const calculate = (expression: string): number | string => {
    const tokens = expression.split(" ");
    let resultValue = parseInt(tokens[0]);

    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const nextNumber = parseInt(tokens[i + 1]);

      switch (operator) {
        case "+":
          resultValue += nextNumber;
          break;
        case "-":
          resultValue -= nextNumber;
          break;
        case "*":
          resultValue *= nextNumber;
          break;
        case "/":
          resultValue /= nextNumber;
          break;
        default:
          return "Error";
      }
    }
    return resultValue;
  };

  const clear = () => {
    setDisplay("");
    setResult("");
  };

  const backspace = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <Modal
      appElement={
        (document.getElementById("__next") as HTMLElement) || undefined
      }
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Calculator Modal"
      ariaHideApp={false}
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      className="relative animate-calculator-fade-in rounded-lg bg-white p-4 shadow-lg outline-none md:p-6"
    >
      <div className="w-[320px] md:w-[400px]">
        {/* Modal Header */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">Calculator</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-600"
          >
            ✕
          </button>
        </div>

        {/* Display and Buttons */}
        <div className="w-full">
          <DisplayContainer
            display={display}
            result={result}
            backspace={backspace}
            clear={clear}
          />
          <div className="mt-6">
            <ButtonsContainer
              operatorClick={operatorClick}
              handleClick={handleClick}
              handleEqual={handleEqual}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CalculatorModal;
