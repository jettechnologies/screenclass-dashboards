import { mulish } from "@/components/shared/fonts";
import Link from "next/link";
import React from "react";

export const SecurityDetails = () => {
  return (
    <div className="mt-16 w-full pb-16">
      <div className="flex items-center justify-between">
        <h3 className="segoe font-semibold text-[#1b1b1b]">Security Details</h3>
        <Link
          href="/forget-password"
          className={`${mulish.className} rounded-md bg-SC-Brand-Blue px-2 py-2 text-sm font-bold text-white md:px-5 md:py-3`}
        >
          Change Password
        </Link>
      </div>
    </div>
  );
};
