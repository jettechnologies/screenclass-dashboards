import React from "react";
import { mulish } from "@/components/shared/fonts";
import Image from "next/image";

const StudentsTable = () => {
  return (
    <div className="mt-3 max-h-[307px] overflow-y-auto rounded-l-lg border border-[#DFE0EB] bg-white md:max-h-[407px]">
      <h3
        className={`${mulish.className} py-4 pl-5 text-lg font-bold text-[#252733] md:py-8 md:text-[23px]`}
      >
        My Students
      </h3>
      {/* tablet and desktop table design */}
      <table className={`hidden md:table ${mulish.className} w-[95%]`}>
        <thead className="">
          <tr className="border-b border-b-[#DFE0EB]">
            <th className="w-[17.5%] pb-2 font-semibold">Photo</th>
            <th className="w-[30%] pb-2 text-left font-semibold">Name</th>
            <th className="w-[17.5%] pb-2 text-left font-semibold">
              Registration No
            </th>
            <th className="w-[17.5%] pb-2 text-left font-semibold">Class</th>
            <th className="w-[17.5%]"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => (
            <tr
              key={index}
              className="border-b border-b-[#DFE0EB] last:border-b-0"
            >
              <td className="w-[17.5%] py-2">
                <div className="flex items-center justify-center">
                  <Image
                    src={"/guardian/ellipse2.svg"}
                    alt="student photo"
                    width={40}
                    height={40}
                  />
                </div>
              </td>
              <td className="w-[30%] py-2 text-left text-sm font-semibold text-[#252733]">
                Temilola Ann
              </td>
              <td className="w-[17.5%] py-2 text-left text-sm font-semibold text-[#252733]">
                SC000011
              </td>
              <td className="w-[17.5%] py-2 text-left text-sm font-semibold text-[#252733]">
                Common Entrance Prep
              </td>
              <td className="w-[17.5%]">
                <div className="flex justify-end pr-9">
                  <Image
                    src={"/guardian/more - vertical.svg"}
                    alt="more vertical icon"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* mobile table design */}
      <table className={`table md:hidden ${mulish.className} w-[95%]`}>
        <thead className="">
          <tr className="border-b border-b-[#DFE0EB]">
            <th className="w-[50%] pb-2 pl-5 text-left font-semibold">Name</th>
            <th className="w-[50%] pb-2 pl-5 text-left font-semibold">
              Registration No
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => (
            <tr
              key={index}
              className="border-b border-b-[#DFE0EB] last:border-b-0"
            >
              <td className="w-[50%] py-2 pl-5 text-left text-sm font-semibold text-[#252733]">
                Temilola Ann
              </td>
              <td className="w-[50%] py-2 pl-5 text-left text-sm font-semibold text-[#252733]">
                SC000011
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
