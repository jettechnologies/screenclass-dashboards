import React from "react";
import { Button } from "./Button";

export function ButtonsContainer({ handleClick, operatorClick, handleEqual }) {
  const renderButtonRow = (buttons) => (
    <div className="mt-2 flex w-full justify-between">
      {buttons.map(({ name, value, action, className }, index) => (
        <Button
          key={index}
          handleClick={action || handleClick}
          name={name}
          value={value}
          className={className || ""}
        />
      ))}
    </div>
  );

  return (
    <div className="mt-4 gap-2">
      {renderButtonRow([
        { name: 1, value: 1 },
        { name: 2, value: 2 },
        { name: 3, value: 3 },
        {
          name: "+",
          value: "+",
          action: () => operatorClick("+"),
          className: "bg-SC-Blue text-white",
        },
      ])}
      {renderButtonRow([
        { name: 4, value: 4 },
        { name: 5, value: 5 },
        { name: 6, value: 6 },
        {
          name: "-",
          value: "-",
          action: () => operatorClick("-"),
          className: "bg-SC-Blue text-white",
        },
      ])}
      {renderButtonRow([
        { name: 7, value: 7 },
        { name: 8, value: 8 },
        { name: 9, value: 9 },
        {
          name: "*",
          value: "*",
          action: () => operatorClick("*"),
          className: "bg-SC-Blue text-white",
        },
      ])}
      {renderButtonRow([
        { name: 0, value: 0 },
        {
          name: "=",
          value: "=",
          action: handleEqual,
          className: "w-1/2 bg-SC-Blue text-white",
        },
        {
          name: "/",
          value: "/",
          action: () => operatorClick("/"),
          className: "bg-SC-Blue text-white",
        },
      ])}
    </div>
  );
}
