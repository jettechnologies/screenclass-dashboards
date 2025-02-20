import React from "react";

export const Container = ({
  title,
  height,
  className,
  children,
}: {
  title: string;
  height?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${height || "h-full"} w-full overflow-clip rounded-lg ${className}`}
    >
      <div className="w-full bg-gray-200 px-6 py-3">
        <p className="text-base font-semibold capitalize text-black">{title}</p>
      </div>
      <div className="clex-1 h-full min-h-[595px] w-full bg-white px-6">
        {children}
      </div>
    </div>
  );
};
