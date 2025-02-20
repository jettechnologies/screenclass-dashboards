import React from "react";

export function DisplayContainer({ display, result, backspace, clear }) {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      {/* Display Section */}
      <div className="flex-1 space-y-3">
        <div className="h-16 w-full rounded-md border border-black bg-white p-4 text-xl text-black shadow-md">
          {display || "0"}
        </div>
        <div className="h-16 w-full rounded-md border border-black bg-white p-4 text-xl text-gray-600 shadow-md">
          {result || "0"}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button
          className="flex h-16 w-16 items-center justify-center rounded-md bg-SC-Blue text-2xl text-white shadow-md hover:bg-blue-700"
          onClick={backspace}
          aria-label="Backspace"
        >
          C
        </button>
        <button
          className="flex h-16 w-16 items-center justify-center rounded-md bg-SC-Blue text-xl font-bold text-white shadow-md hover:bg-blue-700"
          onClick={clear}
          aria-label="Clear All"
        >
          AC
        </button>
      </div>
    </div>
  );
}
