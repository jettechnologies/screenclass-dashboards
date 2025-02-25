import { useState } from "react";

interface PricingTabsProps {
  activeTab: "monthly" | "annually";
  onTabChange: (tab: "monthly" | "annually") => void;
}

export const PricingTabs = ({ activeTab, onTabChange }: PricingTabsProps) => {
  return (
    <div className="relative flex w-full rounded-[10px] border-2 border-gray-300 bg-white p-[2px] shadow-md">
      {/* Sliding Indicator */}
      <div
        className={`absolute top-[5%] h-[90%] w-1/2 rounded-[10px] bg-orange-500 transition-all duration-300 ease-in-out ${
          activeTab === "monthly" ? "left-0" : "left-1/2"
        }`}
      />

      <button
        className={`relative z-10 flex-1 rounded-[10px] px-6 py-2 font-poppins text-sm font-medium ${activeTab === "monthly" ? "text-white" : "text-black"} transition-all ease-in-out lg:text-lg`}
        onClick={() => onTabChange("monthly")}
      >
        Monthly
      </button>

      <button
        className={`relative z-10 flex-1 rounded-[10px] px-6 py-2 font-poppins text-sm font-medium ${activeTab === "annually" ? "text-white" : "text-black"} transition-all ease-in-out lg:text-lg`}
        onClick={() => onTabChange("annually")}
      >
        Annually
      </button>
    </div>
  );
};

export default PricingTabs;
