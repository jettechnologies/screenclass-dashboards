import { mulish } from "@/components/shared/fonts";
import React from "react";

const SecurityDetails = () => {
  return (
    <div className="mt-16 pb-16">
      <div className="flex items-center justify-between">
        <h3 className="segoe font-semibold text-[#1b1b1b]">Security Details</h3>
        <button
          className={`${mulish.className} rounded-md bg-SC-Brand-Blue px-2 md:px-5 py-2 md:py-3 text-sm font-bold text-white`}
        >
          Change Password
        </button>
      </div>
      <div className="mt-12">
        <h4 className="segoe font-black text-[#1b1b1b]">Student Details</h4>
        <p className={`${mulish.className} mt-3 text-sm font-bold`}>
          Temilola Ann
        </p>
        <p className={`${mulish.className} text-sm font-medium text-[#1b1b1b]`}>
          SC51125
        </p>
        <p className={`${mulish.className} mt-5 text-sm text-[#1b1b1b]`}>
          Class
        </p>
      </div>
    </div>
  );
};

export default SecurityDetails;
