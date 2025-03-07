import { mulish } from "@/components/shared/fonts";
import Image from "next/image";
import React from "react";

const PersonalDetailsForm = ({ action }: { action: "read" | "edit" }) => {
  return (
    <form className="w-full pb-10 md:w-[80%]">
      <div className="mb-6 flex items-center justify-between md:mb-12">
        <h2 className="segoe text-lg font-semibold text-[#252733] md:text-xl">
          Personal Details
        </h2>
        {action === "edit" && (
          <Image
            src={"/guardian/edit.svg"}
            alt="edit icon"
            width={45}
            height={45}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="mb-6 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="last-name"
            className={`${mulish.className} font-bold text-black`}
          >
            LAST NAME
          </label>
          <input
            id="last-name"
            type="text"
            className={`${mulish.className} settings-input mt-1`}
            placeholder="Smith"
          />
        </div>
        <div>
          <label
            htmlFor="first-name"
            className={`${mulish.className} font-bold text-black`}
          >
            FIRST NAME
          </label>
          <input
            id="first-name"
            type="text"
            className={`${mulish.className} settings-input mt-1`}
            placeholder="IfeOluwa"
          />
        </div>
      </div>
      <label
        htmlFor="email"
        className={`${mulish.className} font-bold text-black`}
      >
        EMAIL
      </label>
      <input
        id="email"
        type="email"
        className={`${mulish.className} settings-input mb-6 mt-1`}
        placeholder="emailaddress@gmail.com"
      />
      <label
        htmlFor="phone-number"
        className={`${mulish.className} font-bold text-black`}
      >
        PHONE NUMBER
      </label>
      <input
        id="phone-number"
        type="tel"
        className={`${mulish.className} settings-input mt-1`}
        placeholder="+234 900 111 2222"
      />
      {action === "edit" && (
        <button
          className={`${mulish.className} mt-8 h-[42px] w-[108px] rounded-lg bg-SC-Brand-Blue font-semibold text-white`}
          style={{
            boxShadow: "0px 4px 12px 0px rgba(55, 81, 255, 0.24)",
          }}
        >
          Save
        </button>
      )}
    </form>
  );
};

export default PersonalDetailsForm;
